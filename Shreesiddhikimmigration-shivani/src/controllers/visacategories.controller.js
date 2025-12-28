const db = require("../models");
const VisaCategory = db.VisaCategory;

exports.createVisaCategories = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ message: "Array required" });
    }

    const result = await VisaCategory.bulkCreate(data, {
      ignoreDuplicates: true,
    });

    res.status(201).json({
      status_code: 201,
      data: result,
      message: "Visa categories created",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getVisaCategories = async (req, res) => {
  const { userType } = req.query;

  let where = {};

  if (userType === "STUDENT") {
    where.visible_to = ["STUDENT"];
  }
    else if (userType === "AGENT") {
    where.visible_to = ["AGENT"];
    }

  const data = await VisaCategory.findAll({ where });

  res.status(200).json({
    success: true,
    data,
  });
};

