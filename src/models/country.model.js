module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },lse,
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
