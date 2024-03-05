import { Router } from "express";
import { getAllForms } from "../controllers/form-data-controller.js";

const router = Router();

router.route("/all").get(getAllForms);
export default router;
