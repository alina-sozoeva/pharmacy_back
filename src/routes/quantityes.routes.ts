import { Router } from "express";
import { getAllQuantityes } from "../controllers";
import { authMiddleware } from "../middleware";

export const quantityesRouter = Router();

quantityesRouter.get("/", authMiddleware, getAllQuantityes);
