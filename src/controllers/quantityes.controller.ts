import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Quantityes } from "../entities";

export const getAllQuantityes = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Quantityes).find();
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
