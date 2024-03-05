import { Router } from "express";

const router = Router();

router.route("/all").get((req, res) => {
  const form = [
    {
      title: "Employee Information Form",
      id: 1,
    },
    { title: "Student Information Form", id: 2 },
    { title: "Event Registration Form", id: 3 },
  ];

  res.status(200).json({ from: form });
});

export default router;
