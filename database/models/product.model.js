import mongoose from "mongoose";
import { imageSchema } from "./schemas/image.schema.js";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    descrription: [
      {
        name: { type: String, required: true },
        value: [
          {
            type: mongoose.Schema.Types.Mixed,
            required: true,
          },
        ],
        _id: false,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    attributes: [
      {
        name: { type: String, required: true },
        value: { type: mongoose.Schema.Types.Mixed, required: true },
      },
    ],
    finalPrice: {
      type: Number,
    },
    mainImage: {
      type: imageSchema,
    },
    subImages: {
      type: [imageSchema],
      default: [],
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);
const productModel = mongoose.model("Product", productSchema);
export default productModel;