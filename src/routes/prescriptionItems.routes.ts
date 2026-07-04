import { Router } from "express";
import {
  createPrescriptionItem,
  getAllPrescriptionItems,
} from "../controllers";
import { authMiddleware } from "../middleware";

export const prescriptionItemsRouter = Router();

prescriptionItemsRouter.get("/", authMiddleware, getAllPrescriptionItems);
prescriptionItemsRouter.post("/", authMiddleware, createPrescriptionItem);
