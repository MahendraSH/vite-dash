import { Schema, model } from "mongoose";

const tableSchema = new Schema(
  {
    form: {
      type: Schema.Types.ObjectId,
      ref: "Form",
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
    tableData: {
      type: [String]
    }, // Storing tableData as a JSON string
    search: {

      searchFields: [String],
      caseSensitive: {
        type: Boolean,
        default: false,
      },
    },
  },
);

export default model("Table", tableSchema);
