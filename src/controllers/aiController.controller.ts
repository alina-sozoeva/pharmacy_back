import { json, Request, Response } from "express";
import { AppDataSource } from "../db";
import {
  Diagnosis,
  Doses,
  Drugs,
  Durations,
  Frequencyes,
  MealTimings,
} from "../entities";

const arrayToMap = (arr: any, key: string) => {
  return arr.reduce((acc: any, item: any) => {
    acc[item[key]] = item;
    return acc;
  }, {});
};

export const suggestPrescription = async (req: Request, res: Response) => {
  try {
    const { diagnosisCodeid } = req.body;

    const diagnosis = await AppDataSource.getRepository(Diagnosis).find();
    const drugs = await AppDataSource.getRepository(Drugs).find();
    const doses = await AppDataSource.getRepository(Doses).find();
    const frequencyes = await AppDataSource.getRepository(Frequencyes).find();
    const durations = await AppDataSource.getRepository(Durations).find();
    const meal_timings = await AppDataSource.getRepository(MealTimings).find();

    const diagnosisMap = arrayToMap(diagnosis, "codeid");
    const findDiagnosis = diagnosisMap[diagnosisCodeid];

    if (!findDiagnosis) {
      return res.json({ message: "Нет метода лечения" });
    }

    const prompt = `Ты медицинский ассистент. Тебе нужно предложить схему лечения.

    Диагноз: ${findDiagnosis.name}

    Доступные препараты: ${JSON.stringify(drugs.map((d) => ({ guid: d.guid, name: d.nameid })))}
    Доступные дозировки: ${JSON.stringify(doses.map((d) => ({ codeid: d.codeid, title: d.title })))}
    Доступные частоты приёма: ${JSON.stringify(frequencyes.map((f) => ({ codeid: f.codeid, title: f.title })))}
    Доступные длительности курса: ${JSON.stringify(durations.map((d) => ({ codeid: d.codeid, title: d.title })))}
    Доступные варианты приёма относительно еды: ${JSON.stringify(meal_timings.map((m) => ({ codeid: m.codeid, title: m.title })))}

    Выбери подходящий препарат и параметры ТОЛЬКО из предоставленных списков.
    Ответь СТРОГО в формате JSON без пояснений:

        [{
            "drug_guid": "...",
            "dose_codeid": ...,
            "frequency_codeid": ...,
            "duration_codeid": ...,
            "meal_timing_codeid": ...
        }]
    `;

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: prompt }],
        }),
      },
    );

    const data = (await groqResponse.json()) as any;

    const aiText = data.choices[0].message.content;

    const aiResult = JSON.parse(aiText);

    const drugsMap = arrayToMap(drugs, "guid");
    const dosesMap = arrayToMap(doses, "codeid");
    const frequencyesMap = arrayToMap(frequencyes, "codeid");
    const durationsMap = arrayToMap(durations, "codeid");
    const meal_timingsMap = arrayToMap(meal_timings, "codeid");

    const finishArr = aiResult.map((item: any) => ({
      ...item,
      drug_guid: drugsMap[item.drug_guid],
      dose_codeid: dosesMap[item.dose_codeid],
      frequency_codeid: frequencyesMap[item.frequency_codeid],
      duration_codeid: durationsMap[item.duration_codeid],
      meal_timing_codeid: meal_timingsMap[item.meal_timing_codeid],
    }));

    res.status(200).json({ message: "ok", result: finishArr });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};
