import path from "path";
import uploadDir from "../../../config.js";
import fs from "fs"
import { AppError } from "../AppError.js";

const deleteImageFile = async (image) => {
  if (image?.name) {
    const imagePath = path.join(uploadDir, image.name);
    try{
      await fs.promises.access(imagePath);
      await fs.promises.unlink(imagePath);
    }catch(err){
      throw new AppError("Error deleting image file", 404);
    }
  }
};

export default deleteImageFile;
