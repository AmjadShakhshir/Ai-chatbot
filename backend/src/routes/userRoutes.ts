import { Router } from "express";

import { getAllUsers } from "../controllers/users/getAllUsers.js";
import { userSignup } from "../controllers/users/userSignup.js";
import { validate } from "../middlewares/validate.js";
import { userSchema } from "../schemas/userSchema.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(userSchema), userSignup);
export default userRoutes;
