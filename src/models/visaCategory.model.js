module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "VisaCategory",
    {
      id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visible_to: {
        type: DataTypes.ENUM("STUDENT", "AGENT"),
        allowNull: false,
      },
    },
    {
      tableName: "visa_categories",
      timestamps: true,
    }
  );
};
