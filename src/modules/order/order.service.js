import { AppError } from "../../utils/AppError.js";
import {
  getPagination,
  getPaginationData,
} from "../../utils/pagination/pagination.js";
import { clearCart, getCart } from "../cart/cart.data.js";
import * as orderData from "./order.data.js";
import { findCouponByCode } from "../coupon/coupn.data.js";

export const createOrder = async (
  userId,
  address,
  phone,
  payment,
  couponCode
) => {
  const cart = await getCart(userId);

  if (!cart || cart.products.length === 0) {
    throw new AppError("Cart is empty");
  }
  let coupon = null;
  if (couponCode) {
    coupon = await findCouponByCode(couponCode);
    if (!coupon || coupon.status !== "active") {
      throw new AppError("Invalid coupon code", 400);
    }
    const now = new Date();
    if (new Date(coupon.validfrom) < now || new Date(coupon.validto) > now) {
      throw new AppError("Coupon code has expired", 400);
    }
  }
  let totalPrice = 0;
  const products = cart.products.map((item) => {
    const total = item.price * item.qnt;
    totalPrice += total;
    return {
      productId: item.productId,
      qnt: item.qnt,
      price: item.price,
      finalPrice: total,
    };
  });

  if (coupon) {
    totalPrice -= coupon.discount;
    if (totalPrice < 0) totalPrice = 0;
  }
  const order = await orderData.createOrder({
    userId,
    product: products,
    totalPrice,
    address,
    phone,
    payment,
    coupon: coupon._id,
  });

  await clearCart(userId);

  return order;
};

export const getUserOrders = async (userId, skip, page, limit) => {
  const orders = await orderData.getUserOrders(userId, skip, page, limit);
  if (!orders) {
    throw new AppError("No orders found for this user", 404);
  }
  const data = getPaginationData(orders, page, limit);
  return { message: "success", data };
};

export const getUserOrder = async (userId, orderId) => {
  const oreder = await orderData.getUserOrder(userId, orderId);
  if (!oreder) {
    throw new AppError("No order found for this user", 404);
  }
  return { message: "success", oreder };
};
export const getAllOrders = async (status, skip, page, limit) => {
  const ordersData = await orderData.getAllOrders(status, skip, limit);
  if (!ordersData.orders.length) {
    throw new AppError("No orders found", 404);
  }
  const data = getPaginationData(ordersData, page, limit);
  return { message: "success", ...data };
};
