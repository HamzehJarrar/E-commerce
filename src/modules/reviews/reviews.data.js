import { ReviewModel } from "../../../database/models/review.model.js";

export const findReview = async (userId, productId) => {
  return await ReviewModel.findOne({ userId, productId });
};

export const createReview = async ({ userId, productId, comment }) => {
  const newReview = await ReviewModel.create({ userId, productId, comment });
  return newReview;
};

export const getProductReviews = async (productId) => {
  return await ReviewModel.find({ productId }).populate("userId", "userName");
};

export const deleteReview = async (id) => {
    return await ReviewModel.findByIdAndDelete(id);
}

export const deleteReviewByUser = async (userId, productId) => {
  return await ReviewModel.findOneAndDelete({ userId, productId });
};
