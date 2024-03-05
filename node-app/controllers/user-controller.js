import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import ErrorHandler from "../utils/error-handler.js";

export const loginUser = AsyncErrorHandler((req, res, next) => {
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
  if (req.body.userName === admin.userName && req.body.password === admin.password) {
    res
      .status(200)
      .json({
        success: true,
        message: "login successfull ",
        user: admin,
      })
      .cookie(user.id, "userId", { expires: 2 * 3600 * 1000 * 24, httpOnly: true });
  }
  if (req.body.userName !== user.userName || req.body.password !== user.password) {
    next(new ErrorHandler("username or password is worng ", 401));
  }

  res
    .status(200)
    .json({
      success: true,
      message: "login successfull ",
      user: user,
    })
    .cookie(user.id, "userId", { expires: 2 * 3600 * 1000 * 24, httpOnly: true });
});

export const getProfileDetails = AsyncErrorHandler((req, res, next) => {
  const user = {
    userName: "demoUser",
    password: "demoUser@123",
    role: "user",
    profileDiscription: "MBBS Doctor",
    firstName: "user",
    lastName: "demo",
    eamil: "demouser@gmail.com",
    id: "xyz",
  };
  res.status(200).json({
    success: true,
    user: user,
  });
});

export const getAllUsers = AsyncErrorHandler((req, res, next) => {
  const users = [
    {
      userName: "demoUser",
      password: "demoUser@123",
      role: "user",
      profileDiscription: "MBBS Doctor",
      firstName: "user",
      lastName: "demo",
      eamil: "demouser@gmail.com",
      id: "xyzuser",
    },
    {
      userName: "demoAdmin",
      password: "demoAdmin@123",
      role: "admin",
      profileDiscription: "MD Doctor",
      firstName: "Admin",
      lastName: "demo",
      eamil: "demoadmin@gmail.com",
      id: "xyzadmin",
    },
  ];
  res.status(200).json({
    success: true,
    users: users,
  });
});
