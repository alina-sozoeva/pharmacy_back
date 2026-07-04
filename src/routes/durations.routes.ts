import { Router } from "express";
import { getAllDurations } from "../controllers";
import { authMiddleware } from "../middleware";

export const durationsRouter = Router();

durationsRouter.get("/", authMiddleware, getAllDurations);
