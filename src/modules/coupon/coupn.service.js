import { AppError } from "../../utils/AppError.js";
import * as CouponData from "./coupn.data.js";

export const createCoupon = async (data) => {
  const exist = await CouponData.findCouponByCode(data.code);
  if (exist) {
    throw new AppError("Coupon code already exists", 400);
  }

  const newCoupon = await CouponData.create(data);
  return { message: "sucess", newCoupon };
};

export const getAllCoupons = async () => {
  const coupons = await CouponData.getAllCoupons();
  if (!coupons) {
    throw new AppError("No coupons found", 404);
  }
  return coupons;
};

export const updateCoupons = async (id, updateData) => {
  const exist = await CouponData.findCouponById(id);
  if (!exist) {
    throw new AppError("Coupon not found", 404);
  }
  const updateCoupon = await CouponData.updateCoupons(id, updateData);
  return updateCoupon;
};

export const deleteCoupon = async (id) => {
  const exist = await CouponData.findCouponById(id);
  if (!exist) {
    throw new AppError("Coupon not found", 404);
  }
  const deleted = await CouponData.deleteCoupon(id);
  return deleted;
};
