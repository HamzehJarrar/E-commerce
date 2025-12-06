import { AppError } from "../../utils/AppError.js";
import * as reviewData from "./reviews.data.js";

export const createReview = async (data) => {
  const isExist = await reviewData.findReview(data.userId, data.productId);
  if (isExist) {
    throw new AppError("You have already reviewed this product");
  }
  const newReview = await reviewData.createReview(data);
  return newReview;
};

export const getProductReviews = async (productId) => {
  const reviews = await reviewData.getProductReviews(productId);
  return reviews;
};

export const deleteReview = async (id) => {
  const isExist = await reviewData.getReviewById(id);
  if (!isExist) {
    throw new AppError("Review not found", 404);
  }
  const deletedReview = await reviewData.deleteReview(id);
  return deletedReview;
};

export const deleteReviewByUser = async (userId, productId) => {
  const isExist = await reviewData.findReview(userId, productId);
  if (!isExist) {
    throw new AppError("You have not reviewed this product", 404);
  }

  const deletedReview = await reviewData.deleteReviewByUser(userId, productId);
  return deletedReview;
};

