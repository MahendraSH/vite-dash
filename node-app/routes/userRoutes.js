import { Router } from "express";

const router = Router();

router.route("/login").get((req, res) => {
  const user = {
    userName: "demoUser",
    password: "demoUser@123",
  };
  if (
    req.body.userName !== user.userName ||
    req.body.password !== user.password
  ) {
    res.status(401).json({
      success: false,
      message: " user name or password is wrong please check once  ",
    });
  }

  res.status(200).json({
    success: true,
    message: "login successfull ",
    user: user,
  });
});

export default router;
