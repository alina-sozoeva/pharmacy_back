import { Router } from "express";
import { getAllDoctors } from "../controllers";

export const doctorsRouter = Router();

doctorsRouter.get("/", getAllDoctors);
