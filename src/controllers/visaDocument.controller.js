const db = require("../models");
const VisaDocument = db.VisaDocument;
const { generateFileNumber } = require("../utils/fileNumber");
.aadhaarFront || !files.aadhaarBack || !files.marksheet10 || !files.marksheet12 || !files.passportFront || !files.passportBack) {
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
      marksheet10: files.marksheet10?.[0]?.path,
      marksheet12: files.marksheet12?.[0]?.path,
      graduate: files.graduate?.[0]?.path,
      postGraduate: files.postGraduate?.[0]?.path,
      passportFront: files.passportFront?.[0]?.path,
      passportBack: files.passportBack?.[0]?.path,
      cv: files.cv?.[0]?.path,
      miscellaneous: files.miscellaneous?.[0]?.path,
    });

    return res.status(200).json({
      status_code: 200,
      status: 0,
      message: "Documents uploaded successfully",
      data: {
        fileNumber: record.fileNumber,
        visaType: record.visaType,
      },
    });

  } catch (err) {
    return res.status(500).json({ status: 1, message: err.message });
  }
};


getVisaDocumentsPdf = async (req, res) => {
  try {
    const { fileNumber } = req.params;

    const record = await VisaDocument.findOne({ where: { fileNumber } });

    if (!record) {
      return res.status(404).json({ status: 1, message: "Record not found" });
    }

    const pdfBytes = await generateVisaPdf(record);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${fileNumber}.pdf`);

    return res.send(Buffer.from(pdfBytes));

  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 1, message: err.message });
  }
};

module.exports = {
  uploadDocuments,
  getVisaDocumentsPdf,
};

