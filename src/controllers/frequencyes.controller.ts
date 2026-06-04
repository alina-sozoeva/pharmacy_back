import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Frequencyes } from "../entities";

export const getAllFrequencyes = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Frequencyes).find();
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
