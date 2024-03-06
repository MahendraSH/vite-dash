import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import path from "path/posix";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const tableData = [
  {
    title: "Employee Information table",
    id: "employ",
    path: "employ.json",
  },
  { title: "Student Information table", id: "student", path: "student.json" },
  { title: "Event Registration table", id: "event", path: "event.json" },
];

export const getAllTable = AsyncErrorHandler((req, res, next) => {
  res.status(200).json({ table: tableData });
});
export const getTableById = AsyncErrorHandler((req, res, next) => {
  const { id } = req.params;
  const table = tableData.filter((item) => item.id === id);
  if (!table[0]) {
    next(new ErrorHandler(" Id is wrong or missing ", 404));
  }
  res.sendFile(path.join(__dirname, "..", "public/data/table", table[0].path));
});
export const getMyTables = AsyncErrorHandler((req, res, next) => {});
