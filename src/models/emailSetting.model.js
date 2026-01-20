const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = function (sequelize, DataTypes) {      
    const EmailSetting = sequelize.define("EmailSetting", {
      id: {
    type: DataTypes.INTEGER,
    au
    allowNull: false,
  },
  smtp_port: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  smtp_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  smtp_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  smtp_encryption: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: "email_settings",
  timestamps: true,
}); 
    return EmailSetting;
}

