import { Router } from "express";
import { createDoctor, getAllDoctors } from "../controllers";
import { authMiddleware } from "../middleware";

export const doctorsRouter = Router();

doctorsRouter.get("/", authMiddleware, getAllDoctors);
doctorsRouter.post("/", authMiddleware, createDoctor);
