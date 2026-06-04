import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Prescriptions } from "../entities";

export const getAllPrescriptions = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Prescriptions).find();
    res.status(200).json({ message: "ok", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
