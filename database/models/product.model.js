import mongoose from "mongoose";

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
      type: Object,
    },
    subImages: {
      type: [Object],
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

export const productModel = mongoose.model("Product", productSchema);
