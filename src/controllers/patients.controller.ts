import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Patients } from "../entities";
import { Like } from "typeorm";

export const getAllPatients = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const result = await AppDataSource.getRepository(Patients).find({
      where: search ? { fio: Like(`%${search}%`) } : {},
    });

    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};

export const createPatient = async (req: Request, res: Response) => {
  try {
    const getRepository = AppDataSource.getRepository(Patients);
    const newPatient = getRepository.create(req.body);
    await getRepository.save(newPatient);
    res.status(201).json({ message: "create" });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};
