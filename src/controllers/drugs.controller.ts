import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Drugs } from "../entities";
import { Like } from "typeorm";

export const getAllDrugs = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const result = await AppDataSource.getRepository(Drugs).find({
      where: search ? { nameid: Like(`%${search}%`) } : {},
      relations: ["form", "method"],
    });
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
