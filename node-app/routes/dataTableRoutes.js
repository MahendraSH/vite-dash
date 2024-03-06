import { Router } from "express";
import { getAllTable, getTableById } from "../controllers/table-data-controller.js";
import { isUser } from "../utils/is-user.js";

const router = Router();

router.route("/all").get(isUser, getAllTable);
router.route("/:id").get(isUser, getTableById);

export default router;
