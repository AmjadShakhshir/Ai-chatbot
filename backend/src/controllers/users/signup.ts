import { NextFunction, Request, Response } from "express";

import usersService from "../../services/usersService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";

export async function userSignup(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      next(ApiError.badRequest("Missing required fields"));
      return;
    }
    const existingUser = await usersService.findByEmail(email);
    if (existingUser) {
      next(ApiError.badRequest("User already exists"));
      return;
    }
    const user = await usersService.signUp(name, email, password);
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    next(ApiError.internal("Something went wrong"));
  }
}
