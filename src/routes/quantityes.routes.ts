import { Router } from "express";
import { getAllQuantityes } from "../controllers";

export const quantityesRouter = Router();

quantityesRouter.get("/", getAllQuantityes);
