import { Router } from "express";
import { getMenuItems } from "../controllers/ui-controllers.js";
import { isUser } from "../utils/is-user.js";
const router = Router();

router.route("/menu-items").get(isUser, getMenuItems);
export default router;
