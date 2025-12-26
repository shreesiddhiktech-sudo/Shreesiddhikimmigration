  const workVisacounry =(req, res) => {
  return res.status(200).json({
    status_code: 200,
    status: 0,
    message: "Work visa countries fetched successfully",
    data: [
      { countryId: 1, countryName: "Germany", workVisaCount: 11, countryFlag: "https://flagcdn.com/w320/de.png" },
      { countryId: 2, countryName: "Greece", workVisaCount: 7, countryFlag: "https://flagcdn.com/w320/gr.png" },
      { countryId: 3, countryName: "Slovakia", workVisaCount: 5, countryFlag: "https://flagcdn.com/w320/sk.png" },
      { countryId: 4, countryName: "Czech Republic", workVisaCount: 6, countryFlag: "https://flagcdn.com/w320/cz.png" },
      { countryId: 5, countryName: "Mauritius", workVisaCount: 3, countryFlag: "https://flagcdn.com/w320/mu.png" },
      { countryId: 6, countryName: "Canada", workVisaCount: 14, countryFlag: "https://flagcdn.com/w320/ca.png" },
      { countryId: 7, countryName: "Australia", workVisaCount: 9, countryFlag: "https://flagcdn.com/w320/au.png" },
      { countryId: 8, countryName: "Dubai (UAE)", workVisaCount: 12, countryFlag: "https://flagcdn.com/w320/ae.png" }
    ]
  });
}



module.exports = { workVisacounry };