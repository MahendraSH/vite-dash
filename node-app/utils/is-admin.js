import ErrorHandler from "./error-handler.js";
export const isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorHandler(`Role (${req.user.role}) is not allowed to access this route`, 403));
    }
    next();
  };
};
