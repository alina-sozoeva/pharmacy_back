import { Router } from "express";
import { getAllFrequencyes } from "../controllers";
import { authMiddleware } from "../middleware";

export const frequencyesRouter = Router();

frequencyesRouter.get("/", authMiddleware, getAllFrequencyes);
