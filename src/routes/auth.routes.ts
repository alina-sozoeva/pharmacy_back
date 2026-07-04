import { Router } from "express";
import { loginDoctor, loginPharmacies } from "../controllers";

export const authRouter = Router();

authRouter.post("/", loginDoctor);
authRouter.post("/login-pharmacies", loginPharmacies);
