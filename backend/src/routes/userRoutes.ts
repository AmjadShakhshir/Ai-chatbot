import { Router } from "express";

import { getAllUsers } from "../controllers/users/getAllUsers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);

export default userRoutes;
