import ErrorHandler from "../utils/error-handler.js";

const errorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    // error: err.stack || "No stack trace available",
  });
};

export default errorController;
