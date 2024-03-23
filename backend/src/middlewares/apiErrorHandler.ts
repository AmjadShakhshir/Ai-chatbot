import { NextFunction, Request, Response } from "express";
import { ApiError } from "./errors/ApiError.js";

export const apiErrorHandler = (error: typeof ApiError | Error, req: Request, res: Response, next: NextFunction) => {
  const paths = /^(\/users)/;
  if (error instanceof ApiError) {
    res.status(error.code).json({ message: error.message });
    return;
  }
  res.status(500).json({ message: "Something went wrong" });
};
