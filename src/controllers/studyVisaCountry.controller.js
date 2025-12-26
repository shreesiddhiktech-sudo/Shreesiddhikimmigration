

  const studyVisaCountry=(req, res) => {
  return res.status(200).json({
    status_code: 200,
    status: 0,
    message: "Study visa countries fetched successfully",
    data: [
      { countryId: 1, countryName: "Germany", studyVisaCount: 18, countryFlag: "https://flagcdn.com/w320/de.png" },
      { countryId: 2, countryName: "Greece", studyVisaCount: 6, countryFlag: "https://flagcdn.com/w320/gr.png" },
      { countryId: 3, countryName: "Slovakia", studyVisaCount: 5, countryFlag: "https://flagcdn.com/w320/sk.png" },
      { countryId: 4, countryName: "Czech Republic", studyVisaCount: 7, countryFlag: "https://flagcdn.com/w320/cz.png" },
      { countryId: 5, countryName: "Mauritius", studyVisaCount: 3, countryFlag: "https://flagcdn.com/w320/mu.png" },
      { countryId: 6, countryName: "Canada", studyVisaCount: 22, countryFlag: "https://flagcdn.com/w320/ca.png" },
      { countryId: 7, countryName: "Australia", studyVisaCount: 15, countryFlag: "https://flagcdn.com/w320/au.png" },
      { countryId: 8, countryName: "Dubai (UAE)", studyVisaCount: 4, countryFlag: "https://flagcdn.com/w320/ae.png" },
      { countryId: 9, countryName: "Belarus", studyVisaCount: 2, countryFlag: "https://flagcdn.com/w320/by.png" },
      { countryId: 10, countryName: "Moldova", studyVisaCount: 1, countryFlag: "https://flagcdn.com/w320/md.png" }
    ]
  });
}

module.exports = { studyVisaCountry };