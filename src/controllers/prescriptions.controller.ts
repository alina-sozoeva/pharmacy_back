import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Prescriptions } from "../entities";

export const getAllPrescriptions = async (req: Request, res: Response) => {
  try {
    const { presc_guid } = req.query;
    console.log(presc_guid, "presc_guid");

    const result = await AppDataSource.getRepository(Prescriptions).find({
      where: presc_guid ? { guid: presc_guid as string } : {},
      relations: [
        "doctor",
        "patient",
        "items",
        "items.drug",
        "items.frequency",
        "items.quantity",
        "items.duration",
        "items.dose",
        "items.meal_timing",
        "items.drug.form",
      ],
    });
    res.status(200).json({ message: "ok", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const createPrescription = async (req: Request, res: Response) => {
  try {
    const newPrescription = AppDataSource.getRepository(Prescriptions).create(
      req.body,
    );

    await AppDataSource.getRepository(Prescriptions).save(newPrescription);
    res.status(201).json({ message: "create", result: newPrescription });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};

export const updateStatusPrescription = async (req: Request, res: Response) => {
  try {
    const { guid } = req.body;

    await AppDataSource.getRepository(Prescriptions).update(
      { guid },
      {
        status: 1,
      },
    );

    res.status(201).json({ message: "update" });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};
