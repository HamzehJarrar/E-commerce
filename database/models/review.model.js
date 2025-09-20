import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    uesrId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    Comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timeseries: true,
  }
);
export const ReviewModel = mongoose.model("Review", reviewSchema);
