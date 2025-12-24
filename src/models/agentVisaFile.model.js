module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AgentVisaFile", {
    file_number: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    visa_category_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER,
    agent_id: DataTypes.INTEGER,
    file_status: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
};
