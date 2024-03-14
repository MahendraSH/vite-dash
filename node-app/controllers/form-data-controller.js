import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import formModel from "../models/form-models.js";
import { RolePrivileges, PrivilegeEnum } from "../models/user-models.js";

export const createForm = AsyncErrorHandler(async (req, res, next) => {
  // Check if the user has the privilege to create forms
  if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.CREATE)) {
    return next(new ErrorHandler("Unauthorized access", 403));
  }

  try {
    const { heading, description, items } = req.body;
    const form = await formModel.create({
      user: req.user,
      heading,
      description,
      items,
    });
    res.status(201).json({
      success: true,
      form,
    });
  } catch (error) {
    next(error);
  }
});

export const getAllForms = AsyncErrorHandler(async (req, res, next) => {
  // Check if the user has the privilege to read forms
  if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.READ)) {
    return next(new ErrorHandler("Unauthorized access", 403));
  }

  try {
    const forms = await formModel.find();
    res.status(200).json({
      success: true,
      forms,
    });
  } catch (error) {
    next(error);
  }
});

export const getFormById = AsyncErrorHandler(async (req, res, next) => {
  // Check if the user has the privilege to read forms
  if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.READ)) {
    return next(new ErrorHandler("Unauthorized access", 403));
  }

  try {
    const { id } = req.params;
    const form = await formModel.findById(id);
    if (!form) {
      return next(new ErrorHandler("Form not found", 404));
    }
    res.status(200).json({
      success: true,
      form,
    });
  } catch (error) {
    next(error);
  }
});

export const updateFormById = AsyncErrorHandler(async (req, res, next) => {
  // Check if the user has the privilege to update forms
  if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.UPDATE)) {
    return next(new ErrorHandler("Unauthorized access", 403));
  }

  try {
    const { id } = req.params;
    const { heading, description, items } = req.body;
    const form = await formModel.findById(id);
    if (!form) {
      return next(new ErrorHandler("Form not found", 404));
    }
    form.heading = heading;
    form.description = description;
    form.items = items;
    await form.save();
    res.status(200).json({
      success: true,
      message: "Form updated successfully",
      form,
    });
  } catch (error) {
    next(error);
  }
});

export const deleteFormById = AsyncErrorHandler(async (req, res, next) => {
  // Check if the user has the privilege to delete forms
  if (!req.user || !req.user.role || !RolePrivileges[req.user.role].includes(PrivilegeEnum.DELETE)) {
    return next(new ErrorHandler("Unauthorized access", 403));
  }

  try {
    const { id } = req.params;
    const form = await formModel.findById(id);
    if (!form) {
      return next(new ErrorHandler("Form not found", 404));
    }
    await form.deleteOne();
    res.status(200).json({
      success: true,
      message: "Form deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});
