import { AppError } from "../../utils/AppError.js";
import {
  getPagination,
  getPaginationData,
} from "../../utils/pagination/pagination.js";
import { clearCart, getCart } from "../cart/cart.data.js";
import * as orderData from "./order.data.js";

export const createOrder = async (
  userId,
  address,
  phone,
  payment,
  coupon = null
) => {
  const cart = await getCart(userId);

  if (!cart || cart.products.length === 0) {
    throw new AppError("Cart is empty");
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

  const order = await orderData.createOrder({
    userId,
    product: products,
    totalPrice,
    address,
    phone,
    payment,
    coupon,
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
}
export const getAllOrders = async (status, skip, page, limit) => {
  const ordersData = await orderData.getAllOrders(status, skip, limit);
  if (!ordersData.orders.length) {
    throw new AppError("No orders found", 404);
  }
  const data = getPaginationData(ordersData, page, limit);
  return { message: "success", ...data };
};
