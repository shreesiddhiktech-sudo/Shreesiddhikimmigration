module.exports = (sequelize, DataTypes) => {
  const PaypalSetting = sequelize.define("PaypalSetting", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM("Enabled", "Disabled"),
      allowNull: false,
      defaultValue: "Disabled"
    },
    client_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING,
      allowNull: false
    },
    environment: {
      type: DataTypes.ENUM("Sandbox", "Live"),
      allowNull: false,
      defaultValue: "Sandbox"
    },
    credit_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: "paypal_settings",
    timestamps: true
  });

  return PaypalSetting;
};
