import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Doctors } from "../entities";

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Doctors).find();
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
