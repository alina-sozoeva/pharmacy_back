import { Router } from "express";
import { getAllUsers } from "../controllers";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);
