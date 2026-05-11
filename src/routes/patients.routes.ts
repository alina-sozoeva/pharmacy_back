import { Router } from "express";
import { createPatient, getAllPatients } from "../controllers";

export const patientsRouter = Router();

patientsRouter.get("/", getAllPatients);
patientsRouter.post("/", createPatient);
