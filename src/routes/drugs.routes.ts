import { Router } from "express";
import { getAllDrugs } from "../controllers";
import { authMiddleware } from "../middleware";

export const drugsRouter = Router();

drugsRouter.get("/", authMiddleware, getAllDrugs);
