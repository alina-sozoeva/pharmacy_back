import { Router } from "express";
import { getAllDoses } from "../controllers";

export const dosesRouter = Router();

dosesRouter.get("/", getAllDoses);
