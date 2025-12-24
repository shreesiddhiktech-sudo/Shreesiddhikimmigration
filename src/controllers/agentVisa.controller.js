const db = require("../models");
const { getVisaCategories } = require("./visacategories.controller");

exports.submitFiles = async (req, res) => {
  try {
    const { name, email, visa_category_id, country_id, agent_id } = req.body;

    const category = getVisaCategories.find(v => v.id == visa_category_id);
    if (!category) return res.status(400).json({ status: 1, message: "Invalid Visa Category" });

    const file_number = category.prefix + Math.floor(100000000 + Math.random() * 900000000);

    const record = await db.AgentVisaFile.create({
      file_number,
      name,
      email,
      visa_category_id,
      country_id,
      agent_id,
    });

    return res.status(200).json({
      status: 0,
      message: "File Number will be Soon for Candidate for Agent References",
      data: record,
    });

  } catch (err) {
    return res.status(500).json({ status: 1, message: err.message });
  }
};
