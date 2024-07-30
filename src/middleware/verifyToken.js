import jwt from "jsonwebtoken";
import { AppError } from "./../utilities/appError.js";

export const verifyToken = async (req, res, next) => {
  let { token } = req.headers;
  jwt.verify(token, "myNameIsAya", async (err, decoded) => {
    console.log(decoded);
    if (err) return next(new AppError("Invalid Token"));
    req.user = decoded;
    next();
  });
};
