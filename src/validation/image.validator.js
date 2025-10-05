import joi from "joi";
import { fileType } from "../middlewares/multer.middleware.js";

const multerFileSchema = joi.object({
  fieldname: joi.string().required(),
  originalname: joi.string().required(),
  encoding: joi.string().required(),
  mimetype: joi
    .string()
    .valid(...fileType.image)
    .required(),
  destination: joi.string().required(),
  filename: joi.string().required(),
  size: joi.number().required(),
  path: joi.string().required(),
});

export default multerFileSchema;
