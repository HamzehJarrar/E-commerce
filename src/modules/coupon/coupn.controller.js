import * as couponService from "./coupn.service.js";

export const createCoupon = async (req, res, next) => {
  const couponData = await couponService.createCoupon(req.body);
  res.status(201).json({ status: "success", data: couponData });
};

export const getAllCoupons = async (req, res, next) => {
  const coupons = await couponService.getAllCoupons();
  res.status(200).json({ status: "success", data: coupons });
};

export const updateCoupons = async (req, res, next) => {
  const id = req.params.id;
  const updateData = req.body;
  const updateCoupon = await couponService.updateCoupons(id, updateData);
  res.status(200).json({ status: "success", data: updateCoupon });
};

export const deleteCoupon = async (req, res, next) => {
  const id = req.params.id;
  const deleted = await couponService.deleteCoupon(id);
  res
    .status(200)
    .json({
      status: "success",
      message: "Coupon deleted successfully",
      data: deleted,
    });
};
