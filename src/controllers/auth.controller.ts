import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Doctors, Pharmacies } from "../entities";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginDoctor = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const user = await AppDataSource.getRepository(Doctors).findOne({
      where: { login },
    });

    if (!user)
      return res.status(401).json({ message: "Пользователь не найден" });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) return res.status(401).json({ message: "Неверный пароль" });

    const token = jwt.sign(
      { guid: user.guid, role: "doctor" },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};

export const loginPharmacies = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const pharm = await AppDataSource.getRepository(Pharmacies).findOne({
      where: { login },
    });

    if (!pharm)
      return res.status(401).json({ message: "Пользователь не найден" });

    const isValid = await bcrypt.compare(password, pharm.password);

    if (!isValid) return res.status(401).json({ message: "Неверный пароль" });

    const token = jwt.sign(
      { guid: pharm.guid, role: "pharmacy" },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );

    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ pharm });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
