import { Router } from "express";
import { createDoctor, getAllDoctors } from "../controllers";

export const doctorsRouter = Router();

doctorsRouter.get("/", getAllDoctors);
doctorsRouter.post("/", createDoctor);
