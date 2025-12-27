exports.generateFileNumber = (visaType) => {
  const prefix = visaType === "study" ? "STD" : "WRK";
  const random = Math.floor(100000000 + Math.random() * 900000000); // 9 digit
  return `${prefix}${random}`;
};
