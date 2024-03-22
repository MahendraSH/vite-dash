import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import rolesModles from "../models/roles-modles.js";

export const createRole = AsyncErrorHandler(async (req, res, next) => {
  const { label, description } = req.body;
  const role = await rolesModles.create({
    label,
    description,
  });
  res.status(201).json({
    success: true,
    role,
  });
});

export const updateRole = AsyncErrorHandler(async (req, res, next) => {
  const { label, description } = req.body;
  const { id } = req.params;
  const roleToUpdate = await rolesModles.findById(id);
  if (!roleToUpdate) {
    return next(new ErrorHandler(" The  role is not find check the id ", 404));
  }

  roleToUpdate.label = label;
  roleToUpdate.description = description;
  roleToUpdate.save();
  res.status(200).json({
    success: true,
    role: roleToUpdate,
  });
});
export const deleteRole = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const roleToDelete = await rolesModles.findById(id);
  if (!roleToDelete) {
    return next(new ErrorHandler(" The  role is not find check the id ", 404));
  }
  await roleToDelete.deleteOne();
  res.status(200).json({
    success: true,
    message: "delete success full ",
  });
});

export const getRoleById = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const role = await rolesModles.findById(id);
  if (!role) {
    return next(new ErrorHandler(" The role is not find check the  id ", 404));
  }
  res.status(200).json({
    success: true,
    role,
  });
});
export const getAllRoles = AsyncErrorHandler(async (req, res, next) => {
  const roles = await rolesModles.find();
  res.status(200).json({
    success: true,
    roles,
  });
});
