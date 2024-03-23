import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use it in development mode only and remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
