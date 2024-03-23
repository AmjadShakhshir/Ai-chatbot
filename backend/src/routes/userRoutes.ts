import { Router } from "express";

import { getAllUsers } from "../controllers/users/getAllUsers.js";
import { userSignup } from "../controllers/users/userSignup.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", userSignup);
export default userRoutes;
