import multer from "multer";
import path from "path";
import uploadDir from "../../config.js";
import fs from "fs";

const fileType = {
  image: ["image/png", "image/jpg", "image/jpeg"],
  files: ["application/pdf"],
};

const uploadPath = uploadDir;
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${file.fieldname}-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${ext}`;
    cb(null, uniqueName);
  },
});

function fileFilter(req, file, cb) {
  const allType = [...fileType.image, ...fileType.files];
  if (allType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ storage, fileFilter });

export default upload;
