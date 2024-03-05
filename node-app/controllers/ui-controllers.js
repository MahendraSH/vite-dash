import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import ErrorHandler from "../utils/error-handler.js";

export const getMenuItems = (req, res, next) => {
  const is_admin = req.user.role === "admin";
  if (is_admin) {
  } else {
  }
};
