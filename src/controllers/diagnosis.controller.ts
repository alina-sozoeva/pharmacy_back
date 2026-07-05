import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Diagnosis } from "../entities";

export const getAllDiagnosis = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Diagnosis).find();
    res.status(200).json({ message: "ok", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
