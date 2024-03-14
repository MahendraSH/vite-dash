import jwt from "jsonwebtoken";
import userModel from "../models/user-models.js";
import ErrorHandler from "./error-handler.js";

const { verify } = jwt;
export const isUser = async (req, res, next) => {
  const { loginToken } = req.cookies;
  if (!loginToken) {
    return next(new ErrorHandler("Please login to access this route", 401));
  }
  try {
    const decodeData = verify(loginToken, process.env.JWT_SECRET);
    const user = await userModel.findById(decodeData.id);
    if (!user) {
      return next(new ErrorHandler("Please login to access this route", 401));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token", 401));
  }
};

