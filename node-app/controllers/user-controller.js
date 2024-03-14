import ErrorHandler from "../utils/error-handler.js";
import { AsyncErrorHandler } from "../middlewares/async-error-handler.js";
import User from "../models/user-models.js";
import jwtCookie from "../utils/jwt-cookie-maker.js";

export const loginUser = AsyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  jwtCookie(res, 200, user);
});

export const registerUser = AsyncErrorHandler(async (req, res, next) => {
  const { firstName, lastName, email, companyName, password } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    email,
    companyName,
    password,
  });
  jwtCookie(res, 201, user);
});

export const getAllUsers = AsyncErrorHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});

export const getUserById = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

export const getProfileDetails = AsyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

export const updateUserProfileDetails = AsyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  const { email, firstName, lastName, companyName } = req.body;
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.companyName = companyName;
  await user.save();
  res.status(201).json({
    success: true,
    message: "User details updated successfully",
    user,
  });
});

export const updateUserInfoById = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  const { email, firstName, lastName, companyName } = req.body;
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.companyName = companyName;
  await user.save();
  res.status(201).json({
    success: true,
    message: "User details updated successfully",
    user,
  });
});

export const updateUserProfileImage = AsyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  // Handle image upload logic here if needed
  // Update user's avatar field accordingly
  // Save the user document
  res.status(200).json({
    success: false,
    message: "Update profile image functionality not implemented",
  });
});

export const deleteUserAccount = AsyncErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  await user.deleteOne();
  res.clearCookie("loginToken");
  res.status(200).json({
    success: true,
    message: "User account deleted successfully",
  });
});

export const deleteUserById = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  await user.deleteOne();
  res.status(200).json({
    success: true,
    message: "User account deleted successfully",
  });
});

export const logoutUser = AsyncErrorHandler(async (req, res, next) => {
  res.clearCookie("loginToken");
  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});

export const updatePassword = AsyncErrorHandler(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user.id).select("+password");
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  const isPasswordMatched = await user.comparePassword(oldPassword);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid old password", 401));
  }
  user.password = newPassword;
  await user.save();
  res.status(201).json({
    success: true,
    message: "Password updated successfully",
  });
});

export const updateUserRole = AsyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.body;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  user.role = role;
  await user.save();
  res.status(201).json({
    success: true,
    message: "User role updated successfully",
    user,
  });
});
