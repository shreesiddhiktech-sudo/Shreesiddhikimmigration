module.exports = (sequelize, DataTypes) => {
  return sequelize.define("VisaDocument", {
    fileNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    visaType: {
      type: DataTypes.ENUM("study", "work"),
      allowNull: false,
    },
    aadhaarFront: DataTypes.STRING,
    aadhaarBack: DataTypes.STRING,
    marksheet10: DataTypes.STRING,
    marksheet12: DataTypes.STRING,
    graduate: DataTypes.STRING,
    postGraduate: DataTypes.STRING,
    passportFront: DataTypes.STRING,
    passportBack: DataTypes.STRING,
    cv: DataTypes.STRING,
    miscellaneous: DataTypes.STRING,
  });
};
