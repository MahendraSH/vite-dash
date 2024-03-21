import { Router } from "express";
import {
  createPrivilege,
  deletePrivilege,
  getAllPrivileges,
  getPrivilegeById,
  updatePrivilege,
} from "../controllers/privileges-contollers.js";

import { isUser } from "../utils/is-user.js";

const router = Router();

router.route("/all").get(isUser, getAllPrivileges);
router.route("/").post(isUser, createPrivilege);
router.route("/:id").patch(isUser, updatePrivilege).delete(isUser, deletePrivilege).get(isUser, getPrivilegeById);

export default router;
