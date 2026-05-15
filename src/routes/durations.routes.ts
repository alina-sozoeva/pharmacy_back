import { Router } from "express";
import { getAllDurations } from "../controllers";

export const durationsRouter = Router();

durationsRouter.get("/", getAllDurations);
