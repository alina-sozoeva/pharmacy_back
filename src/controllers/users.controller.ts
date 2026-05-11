import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Users } from "../entities";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Users).find();
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", result: error });
  }
};
