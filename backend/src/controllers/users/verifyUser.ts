import { NextFunction, Request, Response } from "express";

import UserRepo from "../../models/UserModel.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepo.findById(res.locals.jwtData.id);
    if (!user) {
      next(ApiError.forbidden("User Not registered OR Token malfunctioned"));
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      next(ApiError.forbidden("Permission didn't match"));
    }
    return res.status(200).json({ message: "User Verified", name: user.name, email: user.email });
  } catch (error) {
    next(ApiError.internal(error.message));
  }
};
