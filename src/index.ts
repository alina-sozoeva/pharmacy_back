import cors from "cors";
import express from "express";
import {
  aiRouter,
  authRouter,
  clinicsRouter,
  doctorsRouter,
  dosesRouter,
  drugsRouter,
  durationsRouter,
  frequencyesRouter,
  mealTimingsRouter,
  patientsRouter,
  pharmaciesRouter,
  prescriptionItemsRouter,
  prescriptionsRouter,
  quantityesRouter,
  usersRouter,
} from "./routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

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
app.use("/meal-timings", mealTimingsRouter);
app.use("/quantityes", quantityesRouter);
app.use("/clinics", clinicsRouter);
app.use("/auth", authRouter);
app.use("/prescriptions", prescriptionsRouter);
app.use("/prescription-items", prescriptionItemsRouter);
app.use("/pharmacies", pharmaciesRouter);
app.use("/suggest", aiRouter);

export default app;
