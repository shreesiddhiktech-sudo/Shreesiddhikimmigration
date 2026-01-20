const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const path = require("path");

async function generateVisaPdf(documentRecord) {
  const pdfDoc = await PDFDocument.create();

  co",
    "passportBack",
    "cv",
    "miscellaneous",
  ];

  for (const field of fileFields) {
    const filePath = documentRecord[field];
    if (!filePath) continue;

    const ext = path.extname(filePath).toLowerCase();
    const fileBytes = fs.readFileSync(filePath);

    if (ext === ".pdf") {
      const extPdf = await PDFDocument.load(fileBytes);
      const copiedPages = await pdfDoc.copyPages(extPdf, extPdf.getPageIndices());
      copiedPages.forEach((page) => pdfDoc.addPage(page));
    } else {
      const image = ext === ".png"
        ? await pdfDoc.embedPng(fileBytes)
        : await pdfDoc.embedJpg(fileBytes);

      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, {
        x: 0,
        y: 0,
        width: image.width,
        height: image.height,
      });
    }
  }

  return await pdfDoc.save();
}

module.exports = { generateVisaPdf };
