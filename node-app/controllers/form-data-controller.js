import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";

export const getAllForms = AsyncErrorHandler((req, res, next) => {
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
export const getFormById = AsyncErrorHandler((req, res, next) => {});
export const getMyForms = AsyncErrorHandler((req, res, next) => {});
