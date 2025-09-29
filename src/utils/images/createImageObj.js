import  uploadDir  from "../../../config.js";

const createImageObj = (file) => {
  if (!file) return null;
  return {
    url: `${uploadDir}/${file.filename}`,
    name: file.filename,
    type: file.mimetype,
  };
};


export default createImageObj;