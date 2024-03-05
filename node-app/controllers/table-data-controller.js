import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";

export const getAllTable = AsyncErrorHandler((req, res, next) => {
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
export const getTableById = AsyncErrorHandler((req, res, next) => { });
export const getMyTables = AsyncErrorHandler((req, res, next) => { });
