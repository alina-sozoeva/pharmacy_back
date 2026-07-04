import { Router } from "express";
import { getAllClinics } from "../controllers";
import { authMiddleware } from "../middleware";

export const clinicsRouter = Router();

clinicsRouter.get("/", authMiddleware, getAllClinics);
