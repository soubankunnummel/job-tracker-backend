import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import errorHandler from "./middleware/error-handler";
import jobRoutes from "./routes/job-route";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/v1/jobs", jobRoutes);
app.use(errorHandler);

export default app;
