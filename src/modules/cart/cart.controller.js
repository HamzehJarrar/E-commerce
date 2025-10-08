import * as cartService from "./cart.service.js";

export const addToCart = async (req, res, next) => {
  const userId = req.user.id;
  const productData = req.body;
  const result = await cartService.addToCart(userId, productData);

  if (result.status === "exists") {
    return res.status(400).json({ message: result.message });
  }

  res.status(201).json({
    message: "Product added to cart successfully",
    data: result,
  });
};

export const getMyCart = async (req, res, next) => {
  const userId = req.user.id;
  const cart = await cartService.getCartByUserId(userId);
  res.status(200).json({
    message: "User cart fetched successfully",
    data: cart,
  });
};
