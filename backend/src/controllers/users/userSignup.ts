import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";

import usersService from "../../services/usersService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";

export async function userSignup(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    next(ApiError.badRequest("Missing required fields"));
    return;
  }

  const hashedPaswword = bcrypt.hashSync(password, 10);
  const existingUser = await usersService.findByEmail(email);

  if (existingUser) {
    next(ApiError.badRequest("User already exists"));
    return;
  }
  const user = await usersService.signUp({ name, email, password: hashedPaswword });
  if (!user) {
    next(ApiError.badRequest("User not created"));
    return;
  }
  res.status(201).json({ id: user._id.toString(), message: "User created" });
}
