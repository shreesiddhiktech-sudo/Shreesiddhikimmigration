const db = require("../models");
const { getVisaCategories } = require("./visacategories.controller");

ber = category.prefix + Math.floor(100000000 + Math.random() * 900000000);

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
