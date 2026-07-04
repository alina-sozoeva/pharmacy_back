import { Router } from "express";
import { createPatient, getAllPatients } from "../controllers";
import { authMiddleware } from "../middleware";

export const patientsRouter = Router();

patientsRouter.get("/", authMiddleware, getAllPatients);
patientsRouter.post("/", authMiddleware, createPatient);
