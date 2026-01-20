module.exports = (sequelize, DataTypes) => {
  return sequelize.define("VisaDocument", {
    fileNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNs.STRING,
    marksheet12: DataTypes.STRING,
    graduate: DataTypes.STRING,
    postGraduate: DataTypes.STRING,
    passportFront: DataTypes.STRING,
    passportBNG,
  });
};
