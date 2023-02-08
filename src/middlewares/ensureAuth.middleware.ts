import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (err || !decoded) throw new AppError("Invalid Token", 401);

      req.client = { email: decoded.email, id: decoded.sub };

      return next();
    }
  );
};

export default ensureAuth;
