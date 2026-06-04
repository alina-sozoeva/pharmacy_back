import { Router } from "express";
import { getAllPrescriptions } from "../controllers";

export const prescriptionsRouter = Router();

prescriptionsRouter.get("/", getAllPrescriptions);
