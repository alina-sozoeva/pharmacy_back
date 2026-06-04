import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Doctors } from "../entities";
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

    res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error", result: error });
  }
};
