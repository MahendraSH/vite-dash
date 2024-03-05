import { Router } from "express";

const router = Router();

router.route("/menu-items").get((req, res) => {
  res.status(200).json({
    menu: {},
  });
});

export default router;
