import { Router } from "express";

const router = Router();

router.route("/all").get((req, res) => {
  const table = [
    { title: "Employ Detaitls Table", id: 1 },
    {
      title: "Student Details  Table ",
      id: 2,
    },
  ];
  res.status(200).json({
    tables: table,
  });
});

export default router;
