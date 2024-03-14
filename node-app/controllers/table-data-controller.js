import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import formModel from "../models/form-models.js";
import tableModel from "../models/table-models.js";
import { RolePrivileges, PrivilegeEnum } from "../models/user-models.js";

export const configureTable = AsyncErrorHandler(async (req, res, next) => {
    // Check if the user has the privilege to create or configure table
    if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.CREATE)) {
        return next(new ErrorHandler("Unauthorized access", 403));
    }
    const { formId, heading, description } = req.body;


    const form = await formModel.findById(formId);
    if (!form) {
        return next(new ErrorHandler("Form not found", 404));
    }
    const table = await tableModel.create({
        form: form,
        tableHeading: heading,
        tableDescription: description
    });

    res.status(201).json({
        success: true,
        table
    });
})

export const getAllTables = AsyncErrorHandler(async (req, res, next) => {
    // Check if the user has the privilege to read tables
    if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.READ)) {
        return next(new ErrorHandler("Unauthorized access", 403));
    }

    const tables = await tableModel.find();
    res.status(200).json({
        success: true,
        tables,
    });
});

//   add a entry to the table 
export const addTableEntry = AsyncErrorHandler(async (req, res, next) => {

    const { id: tableId } = req.params;

    const { entry } = req.body;
    const table = await tableModel.findById(tableId);
    if (!table) {
        return next(new ErrorHandler("Table not found", 404));
    }

    table.tableData.push(entry);
    await table.save();
    res.status(201).json({
        success: true,
        table,
    });
});
// update a entry to the table

export const updateTableEntry = AsyncErrorHandler(async (req, res, next) => {
    // Check if the user has the privilege to update table entry
    if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.UPDATE)) {
        return next(new ErrorHandler("Unauthorized access", 403));
    }

    const { id: tableId } = req.params;

    const { entryId, entry } = req.body;
    const table = await tableModel.findById(tableId);
    if (!table) {
        return next(new ErrorHandler("Table not found", 404));
    }
    table.tableData[entryId] = entry;
    table.save();

    res.status(200).json({
        success: true,
        table,
    });
});
// delete a entry to the table

export const deleteTableEntry = AsyncErrorHandler(async (req, res, next) => {
    // Check if the user has the privilege to delete table entry
    if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.DELETE)) {
        return next(new ErrorHandler("Unauthorized access", 403));
    }

    const { id: tableId } = req.params;

    const { entryId } = req.body;
    const table = await tableModel.findById(tableId);
    if (!table) {
        return next(new ErrorHandler("Table not found", 404));
    }
    table.tableData.splice(entryId, 1);
    table.save();

    res.status(200).json({
        success: true,
        table,
    });
});


export const getTableById = AsyncErrorHandler(async (req, res, next) => {
    // Check if the user has the privilege to read table
    if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.READ)) {
        return next(new ErrorHandler("Unauthorized access", 403));
    }

    const { id } = req.params;
    const table = await tableModel.findById(id);
    if (!table) {
        return next(new ErrorHandler("Table not found", 404));
    }
    res.status(200).json({
        success: true,
        table,
    })
});

export const deleteTableById = AsyncErrorHandler(async (req, res, next) => {
    // Check if the user has the privilege to table
    if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.DELETE)) {
        return next(new ErrorHandler("Unauthorized access", 403));
    }

    const { id } = req.params;
    const table = await tableModel.findById(id);
    if (!table) {
        return next(new ErrorHandler("Table not found", 404));
    }

    await form.deleteOne();
    res.status(200).json({
        success: true,
        message: "Form deleted successfully",
    });
});

