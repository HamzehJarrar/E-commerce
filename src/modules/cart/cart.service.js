import mongoose from "mongoose";
import * as cartData from "./cart.data.js";
import areAttributesEqual from "../../utils/areAttributesEqual.js";

export const addToCart = async (userId, productData) => {
  const mongoId = new mongoose.Types.ObjectId(userId);
  let cart = await cartData.findCartByUserId(mongoId);

  if (!cart) {
    const newCart = await cartData.createCart(userId, productData);
    return newCart;
  }

  const productIndex = cart.products.findIndex((item) => {
    return (
      item.productId.toString() === productData.productId.toString() &&
      areAttributesEqual(item.attributes, productData.attributes)
    );
  });

  if (productIndex > -1) {
    return { status: "exists", message: "Product already in cart" };
  }

  cart.products.push(productData);

  const updatedCart = await cartData.pushProductToCart(cart);

  return updatedCart;
};

export const getCartByUserId = async (userId) => {
  const cart = await cartData.getCart(userId);
  if(!cart){
    return {message: "Cart is empty", products: []};
  }
  return cart; 
};