module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      country_id: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      country_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "countries",
      timestamps: true,
    }
  );
};
