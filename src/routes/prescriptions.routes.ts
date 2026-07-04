import { Router } from "express";
import {
  createPrescription,
  getAllPrescriptions,
  updateStatusPrescription,
} from "../controllers";
import { authMiddleware } from "../middleware";

export const prescriptionsRouter = Router();

prescriptionsRouter.get("/", authMiddleware, getAllPrescriptions);
prescriptionsRouter.post("/", authMiddleware, createPrescription);
prescriptionsRouter.patch("/", authMiddleware, updateStatusPrescription);
