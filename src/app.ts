import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import errorHandler from "./middleware/error-handler";
import jobRoutes from "./routes/job-route";
import cron from "node-cron";
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/v1/jobs", jobRoutes);

// Cron Job: Runs every second
cron.schedule("*/5 * * * * *", () => {
  console.log("Cron job triggered every 5 seconds");
  // Add your logic here (e.g., database cleanup, sending notifications, etc.)
});
app.use(errorHandler);

export default app;
