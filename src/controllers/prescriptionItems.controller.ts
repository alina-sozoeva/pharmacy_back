import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { PrescriptionItems } from "../entities";

export const getAllPrescriptionItems = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(PrescriptionItems).find();
    res.status(200).json({ message: "ok", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
