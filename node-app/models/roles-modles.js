import { Schema, model } from "mongoose";

const roleSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Role", roleSchema);
