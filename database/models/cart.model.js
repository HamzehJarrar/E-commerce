import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    uesrId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        qnt: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timeseries: true,
  }
);
export const CartModel = mongoose.model("Cart", cartSchema);
