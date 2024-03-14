import { Router } from "express";
import { configureTable, getTableById, deleteTableById } from "../controllers/table-data-controller.js";
import { isUser } from "../utils/is-user.js";

const router = Router();

router.route("/").post(isUser, configureTable);
router.route("/:id").get(isUser, getTableById).delete(isUser , deleteTableById)

export default router;
