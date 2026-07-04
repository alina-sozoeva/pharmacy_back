import { Router } from "express";
import { getAllDoses } from "../controllers";
import { authMiddleware } from "../middleware";

export const dosesRouter = Router();

dosesRouter.get("/", authMiddleware, getAllDoses);
