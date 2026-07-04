import { Router } from "express";
import { createPharmacy, getAllPharmacies } from "../controllers";
import { authMiddleware } from "../middleware";

export const pharmaciesRouter = Router();

pharmaciesRouter.get("/", authMiddleware, getAllPharmacies);
pharmaciesRouter.post("/", authMiddleware, createPharmacy);
