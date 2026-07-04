import { Router } from "express";
import { getAllUsers } from "../controllers";
import { authMiddleware } from "../middleware";

export const usersRouter = Router();

usersRouter.get("/", authMiddleware, getAllUsers);
