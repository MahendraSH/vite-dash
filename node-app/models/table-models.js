import { Schema, model } from "mongoose";

const tableSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tableHeading: {
      type: String,
      required: true,
    },
    tableDescription: {
      type: String,
      required: true,
    },
    tableColumns: [
      {
        header: {
          type: String,
          required: true,
        },
        field: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ["text", "number", "date"],
        },
      },
    ],
    tableData: {
      type: String,
      required: true,
    }, // Storing tableData as a JSON string
    search: {
      searchText: {
        type: String,
        default: "",
      },
      searchFields: [String],
      caseSensitive: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true }
);

export default model("Table", tableSchema);
