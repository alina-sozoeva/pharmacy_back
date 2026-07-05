import { Router } from "express";
import { authMiddleware } from "../middleware";
import { getAllDiagnosis } from "../controllers";

export const diagnosisRouter = Router();

diagnosisRouter.get("/", authMiddleware, getAllDiagnosis);
