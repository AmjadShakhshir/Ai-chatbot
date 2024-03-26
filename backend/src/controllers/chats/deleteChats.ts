import { NextFunction, Request, Response } from "express";
import chatsService from "../../services/chatsService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";

export const deleteChats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await chatsService.deleteAllChats(res.locals.jwtData.id);

    if (!user) {
      return res.status(401).json({ message: "User Not registered OR Token malfunctioned" });
    }
    return res.status(200).json({ message: "All chats deleted" });
  } catch (error) {
    next(ApiError.internal(error.message));
  }
};
