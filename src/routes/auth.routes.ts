import { Router } from "express";
import { loginDoctor } from "../controllers";

export const authRouter = Router();

authRouter.post("/", loginDoctor);
