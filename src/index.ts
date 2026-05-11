import cors from "cors";
import express from "express";
import { patientsRouter, usersRouter } from "./routes";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "done" });
});
app.use("/users", usersRouter);
app.use("/patients", patientsRouter);

export default app;
