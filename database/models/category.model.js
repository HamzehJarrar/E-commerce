import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
    attributes: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: ["string", "number", "enum"],
          required: true,
        },
        options: {
          type: [String],
          allowCustomValue: {
            type: Boolean,
            default: false,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = mongoose.model("Category", categorySchema);
