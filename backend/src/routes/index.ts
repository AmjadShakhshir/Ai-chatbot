import { Router } from "express";
import userRoutes from "./userRoutes.js";

const appRouter = Router();

appRouter.use("/users", userRoutes);

export default appRouter;
