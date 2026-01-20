const db = require("../models");

const Country = db.Country;

exports.createCounr.message });
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

        res.