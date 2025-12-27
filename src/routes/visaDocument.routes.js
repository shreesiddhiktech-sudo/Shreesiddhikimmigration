const express = require("express");
const router = express.Router();

const upload = require("../middlewares/upload.middleware");
const validate = require("../middlewares/validate.middleware");
const { visaDocumentSchema } = require("../validations/visaDocument.validation");
const { uploadDocuments, getVisaDocumentsPdf } = require("../controllers/visaDocument.controller");

router.post(
  "/upload",
  upload.fields([
    { name: "aadhaarFront", maxCount: 1 },
    { name: "aadhaarBack", maxCount: 1 },
    { name: "marksheet10", maxCount: 1 },
    { name: "marksheet12", maxCount: 1 },
    { name: "graduate", maxCount: 1 },
    { name: "postGraduate", maxCount: 1 },
    { name: "passportFront", maxCount: 1 },
    { name: "passportBack", maxCount: 1 },
    { name: "cv", maxCount: 1 },
    { name: "miscellaneous", maxCount: 1 },
  ]),
  validate(visaDocumentSchema),
  uploadDocuments
);
router.get("/documents/:fileNumber", getVisaDocumentsPdf);


module.exports = router;
