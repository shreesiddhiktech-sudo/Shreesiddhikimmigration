
  const studyVisaCountry=(req, res) => {
  return res.status(200).json({
    status_code: 200,
    status: 0,
    message: "Study visa countries fetched successfully",
    data: [ame: "Australia", studyVisaCount: 15, countryFlag: "https://flagcdn.com/w320/au.png" },
      { countryId: 8, countryName: "Dubai (UAE)", studyVisaCount: 4, countryFlag: "https://flagcdn.com/w320/ae.png" },
      { countryId: 9, countryName: "Belarus", studyVisaCount: 2, countryFlag: "https://flagcdn.com/w320/by.png" },
      { countryId: 10, countryName: "Moldova", studyVisaCount: 1, countryFlag: "https://flagcdn.com/w320/md.png" }
    ]
  });
}

module.exports = { studyVisaCountry };