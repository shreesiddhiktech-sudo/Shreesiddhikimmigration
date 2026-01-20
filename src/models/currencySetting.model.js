module.exports = (sequelize, DataTypes) => {
  const CurrencySetting = sequelize.define("CurrencySetting", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    currency_position: {
      type: DataTypes.ENUM("Left", "Right"),
      allowNull: false,
      defaultValue: "Left"
    },
    thousand_separator: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    decimal_separator: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    decimal_places: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    }
  }, {
    tableName: "currency_settings",
    timestamps: true
  });

  return CurrencySetting;
};
