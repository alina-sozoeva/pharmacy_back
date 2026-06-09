import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { PrescriptionItems } from "../entities";

export const getAllPrescriptionItems = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(PrescriptionItems).find({
      relations: [
        "drug",
        "prescription",
        "prescription.doctor",
        "prescription.patient",
        "frequency",
        "quantity",
        "duration",
        "dose",
        "meal_timing",
      ],
    });
    res.status(200).json({ message: "ok", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const createPrescriptionItem = async (req: Request, res: Response) => {
  try {
    const { recipeItems } = req.body;
    const newItems =
      AppDataSource.getRepository(PrescriptionItems).create(recipeItems);
    await AppDataSource.getRepository(PrescriptionItems).save(newItems);
    res.status(200).json({ message: "create" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
