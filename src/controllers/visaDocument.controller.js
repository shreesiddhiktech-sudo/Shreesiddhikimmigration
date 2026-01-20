const db = require("../models");
const VisaDocument = db.VisaDocument;

    const files = req.files;
    const { visaType } = req.body;

    if (!files.aadhaarFront || !files.aadhaarBack || !files.marksheet10 || !files.marksheet12 || !files.passportFront || !files.passportBack) {
      return res.status(400).json({ status: 1, message: "Missing mandatory documents" });
    }

    if (visaType === "work" && !files.cv) {
      return res.status(400).json({ status: 1, message: "CV is required for Work Visa" });
    }

    const fileNumber = generateFileNumber(visaType);



    const record = await VisaDocument.create({
      fileNumber,
      visaType,
      aadhaarFront: files.aadhaarFront?.[0]?.path,
      aadhaarBack: files.aadhaarBack?.[0]?.path,
      mark0]?.path,
      graduate: files.graduate?.[0]?.path,
      postGraduate: files.postGraduate?.[0]?.path,
      passportFront: files.passportFront?.[0]?.path,
   
    return res.status(200).json({
      status_code: 200,
      status: 0,
      message: "Documents uploaded successfully",



getVisaDocumentsPdf = async (req, res) => {
  try {
    const { fileNumber } = req.params;

    const record = await VisaDocument.findOne({ where: { fileNumber } });

    if (!record) {
      return res.status(404).json({ status: 1, message: "Record not found" });
    }

    const pdfBytes = await generateVisaPdf(record);

    res.setHeader("Content-Type", "application/pdf");
   
    return res.status(500).json({ status: 1, message: err.message });
  }
};

module.exports = {
  uploadDocuments,
  getVisaDocumentsPdf,
};

