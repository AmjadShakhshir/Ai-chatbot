import { NextFunction, Request, Response } from "express";

import UserRepo from "../../models/UserModel.js";

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepo.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).json({ message: "User Not registered OR Token malfunctioned" });
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).json({ message: "Permission didn't match" });
    }
    return res.status(200).json({ message: "User Verified", name: user.name, email: user.email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "ERROR", cause: error.message });
  }
};
