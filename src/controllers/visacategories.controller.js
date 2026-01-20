const db = require("../models");
const VisaCategory = db.VisaCategory;

exports.createVisaCategories = async (req, res) => {
  try {es.status(400).json({ message: "Array required" });
    }

    const result = await VisaCategory.bulkCreate(data, {
      ignoreDuplicates: true,
    });

    res.sta
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
ere = {};

  if (userType === "STUDENT") {
    where.visible_to = ["STUDENT"];
  }

  const data = await VisaCategory.findAll({ where });


};

