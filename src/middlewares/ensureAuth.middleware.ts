import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (err: any, decoded: any) => {
        req.user = { email: decoded.email, id: decoded.sub };

        return next();
      }
    );
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default ensureAuth;
