import * as reviewService from "./reviews.service.js";

export const createReview = async (req, res) => {
  const userId = req.user.id;
  const { productId, comment } = req.body;
  const newReview = await reviewService.createReview({
    userId,
    productId,
    comment,
  });
  res
    .status(201)
    .json({ message: "Review created successfully", review: newReview });
};

export const getProductReviews = async (req, res) => {
  const { productId } = req.params;
  const reviews = await reviewService.getProductReviews(productId);
  res.status(200).json({ reviews });
};

export const deleteReview = async (req, res) => {
  const id = req.params.id;

  const deletedReview = await reviewService.deleteReview(id);
  res.status(200).json({ message: "Review deleted successfully" });
};

export const deleteReviewByUser = async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.id;

  const deletedReview = await reviewService.deleteReviewByUser(userId, productId);

  if (!deletedReview) {
    throw new AppError("You have not reviewed this product", 404);
  }

  res.status(200).json({ message: "Your review has been deleted successfully" });
};

