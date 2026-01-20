const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "miscellaneous") {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Miscellaneous must be a PDF file"));
    }
  }
  cb(null, true);
};

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter,
});

module.exports = upload;
