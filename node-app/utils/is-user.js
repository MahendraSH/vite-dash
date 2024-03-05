import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";

export const isUser = AsyncErrorHandler((req, res, next) => {
  const { userId } = req.cookies;
  if (!userId) {
    return next(new ErrorHandler("Please login to access this route", 401));
  }
  const user = {
    userName: "demoUser",
    password: "demoUser@123",
    role: "user",
    profileDiscription: "MBBS Doctor",
    firstName: "user",
    lastName: "demo",
    eamil: "demouser@gmail.com",
    id: "xyzuser",
  };
  const admin = {
    userName: "demoAdmin",
    password: "demoAdmin@123",
    role: "admin",
    profileDiscription: "MD Doctor",
    firstName: "Admin",
    lastName: "demo",
    eamil: "demoadmin@gmail.com",
    id: "xyzadmin",
  };
  req.user = userId === user.id ? user : admin;
  next();
});
