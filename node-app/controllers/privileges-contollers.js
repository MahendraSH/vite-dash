import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import ErrorHandler from "../utils/error-handler.js";
import privilegeModels from "../models/privileges-models.js";

export const createPrivilege = AsyncErrorHandler(async (req, res, next) => {
  const { label, description } = req.body;
  const privilege = await privilegeModels.create({
    label,
    description,
  });
  res.status(201).json({
    success: true,
    privilege,
  });
});

export const updatePrivilege = AsyncErrorHandler(async (req, res, next) => {
  const { label, description } = req.body;
  const { id } = req.params;
  const privilegeToUpdate = await privilegeModels.findById(id);
  if (!privilegeToUpdate) {
    return next(new ErrorHandler("The privilege with the provided ID was not found", 404));
  }

  privilegeToUpdate.label = label;
  privilegeToUpdate.description = description;
  await privilegeToUpdate.save();
  res.status(200).json({
    success: true,
    privilege: privilegeToUpdate,
  });
});

export const deletePrivilege = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const privilegeToDelete = await privilegeModels.findById(id);
  if (!privilegeToDelete) {
    return next(new ErrorHandler("The privilege with the provided ID was not found", 404));
  }
  await privilegeToDelete.deleteOne();
  res.status(200).json({
    success: true,
    message: "Privilege deleted successfully",
  });
});

export const getPrivilegeById = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const privilege = await privilegeModels.findById(id);
  if (!privilege) {
    return next(new ErrorHandler("The privilege with the provided ID was not found", 404));
  }
  res.status(200).json({
    success: true,
    privilege,
  });
});

export const getAllPrivileges = AsyncErrorHandler(async (req, res, next) => {
  const privileges = await privilegeModels.find();
  res.status(200).json({
    success: true,
    privileges,
  });
});
