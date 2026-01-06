const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = function (sequelize, DataTypes) {      
    const EmailSetting = sequelize.define("EmailSetting", {
      id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  mail_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  from_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  from_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  smtp_host: {
    type: DataTypes.STRING,
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

