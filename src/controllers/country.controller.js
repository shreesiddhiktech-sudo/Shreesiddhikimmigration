const db = require("../models");

const Country = db.Country;

exports.createCountries = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: "Array required" });
    }

    const result = await Country.bulkCreate(req.body, {
      ignoreDuplicates: true,
    });

    res.status(201).json({
      success: true,
      message: "Countries created",
      count: result.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCountries = async (req, res) => {
    try {
        if (!res) {
            return res.status(400).json({ message: "Invalid response object" });
        }

        const data = await Country.findAll();

        if (!data) {
            return res.status(404).json({ 
                success: false, 
                message: "No countries found" 
            });
        }

        res.status(200).json({
            success: true,
            data,
        });
    } catch (err) {
        res.status(500).json({ 
            success: false, 
            error: err.message 
        });
    }
};
