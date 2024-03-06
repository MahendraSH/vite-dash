import path from "path/posix";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import ErrorHandler from "../utils/error-handler.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const getMenuItems = (req, res, next) => {
  const is_admin = req.user.role === "admin";
  if (is_admin) {
    res.sendFile(path.join(__dirname, "..", "public/ui", "admin/menu-item.json"));
  } else {
    res.sendFile(path.join(__dirname, "..", "public/ui", "user/menu-item.json"));
  }
};
