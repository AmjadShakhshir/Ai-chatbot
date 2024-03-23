import { NextFunction, Request, Response } from "express";

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
  const paths = /^(\/users)/;
  res.status(404).json({ msg: "Route not found" });
  next();
}
