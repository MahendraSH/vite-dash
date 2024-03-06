import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const formsData = [
  {
    title: "Employee Information Form",
    id: "employ",
    path: "employ.json",
  },
  { title: "Student Information Form", id: "student", path: "student.json" },

  { title: "Event Registration Form", id: "event", path: "event.json" },
];

export const getAllForms = AsyncErrorHandler(async (req, res, next) => {
  res.status(200).json({ froms: formsData });
});

export const getFormById = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const form = formsData.filter((item) => item.id === id);
  if (!form[0]) {
    next(new ErrorHandler("Id is wrong or missing  ", 404));
  }
  res.sendFile(path.join(__dirname, "..", "public/data/form", form[0].path));
});
export const getMyForms = AsyncErrorHandler((req, res, next) => {});
