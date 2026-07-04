import { Router } from "express";
import { getAllMealTimings } from "../controllers";
import { authMiddleware } from "../middleware";

export const mealTimingsRouter = Router();

mealTimingsRouter.get("/", authMiddleware, getAllMealTimings);
