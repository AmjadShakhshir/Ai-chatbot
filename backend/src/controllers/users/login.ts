import { NextFunction, Request, Response } from "express";

import usersService from "../../services/usersService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next(ApiError.badRequest("Missing required fields"));
      return;
    }
    const user = await usersService.logIn({ email, password });
    if (!user) {
      next(ApiError.badRequest("User does not exist"));
      return;
    }
    res.status(200).json({ message: "OK", user });
  } catch (error) {
    console.log(error);
    next(ApiError.internal("Something went wrong"));
  }
}
