import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Pharmacies } from "../entities";
import bcrypt from "bcrypt";

export const getAllPharmacies = async (req: Request, res: Response) => {
  try {
    const result = await AppDataSource.getRepository(Pharmacies).find();
    res.status(200).json({ message: "done", result: result });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};

export const createPharmacy = async (req: Request, res: Response) => {
  try {
    const { name, phone, login, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const pharmacist = AppDataSource.getRepository(Pharmacies).create({
      name,
      phone,
      login,
      password: hashedPassword,
    });

    const findPharmacist = await AppDataSource.getRepository(
      Pharmacies,
    ).findOne({ where: { login } });

    if (findPharmacist) {
      return res.status(400).json({ message: "Такой логин существует" });
    }

    await AppDataSource.getRepository(Pharmacies).save(pharmacist);
    res.status(201).json({ message: "create" });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "error", result: error });
  }
};
