import { Router } from "express";
import {
  createPrescriptionItem,
  getAllPrescriptionItems,
} from "../controllers";

export const prescriptionItemsRouter = Router();

prescriptionItemsRouter.get("/", getAllPrescriptionItems);
prescriptionItemsRouter.post("/", createPrescriptionItem);
