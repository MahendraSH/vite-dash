import { Router } from "express";
import { getAllForms, getFormById, createForm, updateFormById, deleteFormById } from "../controllers/form-data-controller.js";
import { isUser } from "../utils/is-user.js";
import { isAdmin } from "../utils/is-admin.js";

const router = Router();

router.route("/all").get(isUser, getAllForms);
router.route("/:id").get(isUser, getFormById);
router.route("/").post(isUser, createForm);
router.route("/:id").put(isUser, updateFormById);
router.route("/:id").delete(isUser, deleteFormById);


// create the rotues for user 


export default router;
