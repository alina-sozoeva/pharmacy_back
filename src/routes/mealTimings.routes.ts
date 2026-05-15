import { Router } from "express";
import { getAllMealTimings } from "../controllers";

export const mealTimingsRouter = Router();

mealTimingsRouter.get("/", getAllMealTimings);
