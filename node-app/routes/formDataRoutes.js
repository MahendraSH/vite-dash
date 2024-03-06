import { Router } from "express";
import { getAllForms, getFormById } from "../controllers/form-data-controller.js";
import { isUser } from "../utils/is-user.js";

const router = Router();

router.route("/all").get(isUser, getAllForms);
router.route("/:id").get(isUser, getFormById);
export default router;
