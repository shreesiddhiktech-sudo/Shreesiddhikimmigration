  const workVisacounry =(req, res) => {
  return res.status(200).json({
    status_code: 200,
    message: "Work visa countries fetched successfully",
    data: [
      { countryI8, countryName: "Dubai (UAE)", workVisaCount: 12, countryFlag: "https://flagcdn.com/w320/ae.png" }
    ]
  });
}



module.exports = { workVisacounry };