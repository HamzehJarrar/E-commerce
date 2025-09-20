import mongoose from "mongoose";

const favSchema = new mongoose.Schema(
  {
    uesrId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timeseries: true,
  }
);
export const FavoriteModel = mongoose.model("Favorite", favSchema);
