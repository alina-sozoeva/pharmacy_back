import { Router } from "express";
import { getAllFrequencyes } from "../controllers";

export const frequencyesRouter = Router();

frequencyesRouter.get("/", getAllFrequencyes);
