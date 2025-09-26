import * as data from "./category.data.js";

const createCategory = async (body, file) => {
  const exist = await data.getCategoryByName(body.name);
  if (exist) {
    throw new Error("Category already exists", 400);
  }
};
