import cors from "cors";
import express from "express";
import {
  authRouter,
  clinicsRouter,
  doctorsRouter,
  dosesRouter,
  drugsRouter,
  durationsRouter,
  frequencyesRouter,
  mealTimingsRouter,
  patientsRouter,
  quantityesRouter,
  usersRouter,
} from "./routes";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/health", (req, res) => {
  res.send({ status: "done" });
});
app.use("/users", usersRouter);
app.use("/patients", patientsRouter);
app.use("/drugs", drugsRouter);
app.use("/doctors", doctorsRouter);
app.use("/doses", dosesRouter);
app.use("/durations", durationsRouter);
app.use("/frequencyes", frequencyesRouter);
app.use("/mealTimings", mealTimingsRouter);
app.use("/quantityes", quantityesRouter);
app.use("/clinics", clinicsRouter);
app.use("/auth", authRouter);

export default app;
