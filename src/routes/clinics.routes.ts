import { Router } from "express";
import { getAllClinics } from "../controllers";

export const clinicsRouter = Router();

clinicsRouter.get("/", getAllClinics);
