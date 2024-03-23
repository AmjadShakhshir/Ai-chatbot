import { NextFunction, Request, Response } from "express";
import usersService from "../../services/usersService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";

export async function userSignup(req: Request, res: Response, next: NextFunction) {
  const user = await usersService.signUp(req.body);
  if (!user) {
    next(ApiError.badRequest("User not created"));
    return;
  }
  res.status(201).json({ user, message: "User created" });
}
