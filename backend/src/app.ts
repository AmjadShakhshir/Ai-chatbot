import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import { apiErrorHandler } from "./middlewares/apiErrorHandler.js";
import { routeNotFound } from "./middlewares/routeNotFound.js";
import cookieParser from "cookie-parser";

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// use it in development mode only and remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

app.use(apiErrorHandler);
app.use(routeNotFound);

export default app;
