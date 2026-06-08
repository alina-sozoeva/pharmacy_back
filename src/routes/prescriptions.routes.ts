import { Router } from "express";
import { createPrescription, getAllPrescriptions } from "../controllers";

export const prescriptionsRouter = Router();

prescriptionsRouter.get("/", getAllPrescriptions);
prescriptionsRouter.post("/", createPrescription);
