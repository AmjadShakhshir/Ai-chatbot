import { NextFunction, Request, Response } from "express";

import usersService from "../../services/usersService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";
import { COOKIE_NAME } from "../../utils/constants.js";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      next(ApiError.badRequest("Missing required fields"));
      return;
    }

    res.clearCookie(COOKIE_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });

    const user = await usersService.logIn({ email, password });
    if (!user) {
      next(ApiError.badRequest("User does not exist"));
      return;
    }

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, user.token, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      expires,
      signed: true,
    });
    return res.status(200).json({ message: "OK", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);
    next(ApiError.internal("Something went wrong"));
  }
}
