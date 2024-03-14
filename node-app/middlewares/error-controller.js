
import ErrorHandler from "../utils/error-handler.js";

const errorController = (
  err,
  req,
  res,
  next
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const duplicatedKey = Object.keys(err.keyValue)[0];
    const message = `Duplicate ${duplicatedKey} entered.`;
    err = new ErrorHandler(message, 400);
  }

  console.log(err.stack);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    // error: err.stack || "No stack trace available",
  });
};

export default errorController;