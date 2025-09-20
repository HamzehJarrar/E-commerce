import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    descrription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discoutn: {
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
    attributes: {
      type: Object,
      default: {},
    },
    finalPrice: {
      type: Number,
    },
    mainImage: {
      type: Object,
    },
    subImages: [
      {
        type: Object,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const productModel = mongoose.model("Product", productSchema);
