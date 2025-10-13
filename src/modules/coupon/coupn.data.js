import { couponModel } from "../../../database/models/coupon.model.js";

export const findCouponByCode = async (code) => {
  return await couponModel.findOne({ code });
};
export const findCouponById = async (id) => {
    return await couponModel.findById(id);
}
export const create = async (data) => {
  return await couponModel.create(data);
};

export const getAllCoupons = async () => {
    return await couponModel.find().select("code discount validTo validFrom");
}

export const updateCoupons = async (id, updateData) => {
    return await couponModel.findByIdAndUpdate(id, updateData, { new: true });
}

export const deleteCoupon = async (id) => {
    return await couponModel.findByIdAndDelete(id);
}