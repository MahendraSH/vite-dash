import { Router } from "express";
import { createRole, deleteRole, getAllRoles, getRoleById, updateRole } from "../controllers/roles-contollers.js";
import { isUser } from "../utils/is-user.js";
const router = Router();

router.route("/all").get(isUser, getAllRoles);
router.route("/").post(isUser, createRole);
router.route("/:id").patch(isUser, updateRole).delete(isUser, deleteRole).get(isUser, getRoleById);

export default router;
