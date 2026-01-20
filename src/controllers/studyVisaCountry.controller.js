
  const studyVisaCountry=(req, res) => {
  return res.status(200).json({
    status_code: 200,
    status: 0,
    message: "Study visa countries fetched successfully",
    data: [
      { c, countryName: "Moldova", studyVisaCount: 1, countryFlag: "https://flagcdn.com/w320/md.png" }
    ]
  });
}

module.exports = { studyVisaCountry };