import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getProfileDetails,
  loginUser,
  logoutUser,
  registerUser,
  updatePassword,
  updateUserRole,
} from "../controllers/user-controller.js";
import { isUser } from "../utils/is-user.js";
import { isAdmin } from "../utils/is-admin.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/signup").post(registerUser);
router.route("/create").post(isUser, isAdmin("admin"), createUser);
router.route("/me").get(isUser, getProfileDetails);
router.route("/all").get(isUser, isAdmin("admin"), getAllUsers);
router.route("/logout").post(isUser, logoutUser);
router.route("/update-password").put(isUser, updatePassword);
router.route("/update-role/:id").put(isUser, isAdmin("admin"), updateUserRole);
export default router;
