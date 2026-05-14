import { Router } from "express";
import { getAllDrugs } from "../controllers";

export const drugsRouter = Router();

drugsRouter.get("/", getAllDrugs);
