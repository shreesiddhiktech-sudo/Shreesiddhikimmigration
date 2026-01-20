module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AgentVisaFile", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    v