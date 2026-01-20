  const workVisacounry =(req, res) => {
  return res.status(200).json({
    status_code: 200,
    status: 0,
    message: "Work visa countries fetched successfully",
    data: [
      { countryId: 1, countryName: "Germany", workVisaCount: 11, countryFlag: "https://flagcdn.com/w320/de.png" },
      { countryI8, countryName: "Dubai (UAE)", workVisaCount: 12, countryFlag: "https://flagcdn.com/w320/ae.png" }
    ]
  });
}



module.exports = { workVisacounry };