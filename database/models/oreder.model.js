import mongoose from "mongoose";

const orederSchema = new mongoose.Schema(
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
          min: 1,
        },
        price: {
          type: number,
          required: true,
        },
        findPrice: {
          type: number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: number,
      required: true,
    },
    coupon: {
      type: mongoose.Types.ObjectId,
      ref: "Coupon",
      default: null,
    },
    payment: {
      type: String,
      enum: ["cash", "card"],
      default: "cash",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "onway", "delivered", "canceled"],
      default: "pending",
      required: true,
    },
  },
  {
    timeseries: true,
  }
);
export const OederModel = mongoose.model("Order", orederSchema);
