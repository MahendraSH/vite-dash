import { Router } from "express";
import { getAllUsers, getProfileDetails, loginUser, logoutUser } from "../controllers/user-controller.js";
import { isUser } from "../utils/is-user.js";
import { isAdmin } from "../utils/is-admin.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/me").get(isUser, getProfileDetails);
router.route("/all").get(isUser, isAdmin("admin"), getAllUsers);
router.route("/logout").post(isUser, logoutUser);
export default router;
