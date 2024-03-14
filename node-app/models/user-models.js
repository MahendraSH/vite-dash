import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";
import validator from "validator";

// Define an enum for privileges
export const PrivilegeEnum = {
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  DELETE: "delete",
};

// Define privileges for different roles
export const RolePrivileges = {
  user: [PrivilegeEnum.READ],
  admin: [PrivilegeEnum.CREATE, PrivilegeEnum.READ, PrivilegeEnum.UPDATE, PrivilegeEnum.DELETE],
  superAdmin: [PrivilegeEnum.CREATE, PrivilegeEnum.READ, PrivilegeEnum.UPDATE, PrivilegeEnum.DELETE],
  manager: [PrivilegeEnum.CREATE, PrivilegeEnum.READ, PrivilegeEnum.UPDATE],
};

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email."],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email address."],
    },
    companyName: {
      type: String,
      required: [true, "Please enter your company name."],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password."],
      validate: {
        validator: function (value) {
          return (
            value.length >= 6 &&
            validator.isStrongPassword(value, {
              minLength: 6,
              minLowercase: 1,
              minUppercase: 1,
              minNumbers: 1,
              minSymbols: 1,
            })
          );
        },
        message:
          "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      },
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superAdmin", "manager"], // roles
      default: "user",
    },
    privileges: {
      type: [
        {
          type: String,
          enum: Object.values(PrivilegeEnum), // Using enum for privileges
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

// Assign privileges based on the user's role
userSchema.pre("save", function (next) {
  if (!this.isModified("role")) {
    return next();
  }
  this.privileges = RolePrivileges[this.role] || [];
  next();
});

// Encrypt password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare user password for login
userSchema.methods.comparePassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new Error("An error occurred while comparing passwords.");
  }
};

// JWT token generation
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

export default model("User", userSchema);
