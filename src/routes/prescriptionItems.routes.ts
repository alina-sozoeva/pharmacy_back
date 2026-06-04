import { Router } from "express";
import { getAllPrescriptionItems } from "../controllers";

export const prescriptionItemsRouter = Router();

prescriptionItemsRouter.get("/", getAllPrescriptionItems);
