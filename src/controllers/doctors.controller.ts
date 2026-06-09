import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Doctors } from "../entities";
import "dotenv/config";
import bcrypt from "bcrypt";

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Doctors).find();
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const createDoctor = async (req: Request, res: Response) => {
  try {
    const { nameid, phone, login, password, clinic } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = AppDataSource.getRepository(Doctors).create({
      nameid,
      phone,
      login,
      password: hashedPassword,
      clinic,
    });

    const findDoc = await AppDataSource.getRepository(Doctors).findOne({
      where: { login },
    });

    if (findDoc)
      return res.status(400).json({ message: "Такой логин существует" });

    await AppDataSource.getRepository(Doctors).save(doctor);
    res.status(201).json({ massage: "create" });
  } catch (error) {
    console.log();
    res.status(500).json({ message: "error", result: error });
  }
};
