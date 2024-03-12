import { Schema, model } from "mongoose";

const formSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: [
      {
        label: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ["input-text", "input-number", "radio", "text-area", "select", "checkbox", "date-picker"],
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        options: [String], // Only required for types "radio", "select", and "checkbox"
      },
    ],
  },
  { timestamps: true }
);

export default model("Form", formSchema);
