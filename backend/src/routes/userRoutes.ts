import { Router } from "express";

import { getAllUsers } from "../controllers/users/getAllUsers.js";
import { signup } from "../controllers/users/signup.js";
import { validate } from "../middlewares/validate.js";
import { loginSchema, userSchema } from "../schemas/userSchema.js";
import { login } from "../controllers/users/login.js";
import { verifyToken } from "../utils/token-manager.js";
import { verifyUser } from "../controllers/users/verifyUser.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.post("/signup", validate(userSchema), signup);
userRoutes.post("/login", validate(loginSchema), login);

export default userRoutes;
