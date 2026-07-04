import { Router } from "express";
import { authMiddleware } from "../middleware";
import { suggestPrescription } from "../controllers";

export const aiRouter = Router();

aiRouter.post("/", authMiddleware, suggestPrescription);
