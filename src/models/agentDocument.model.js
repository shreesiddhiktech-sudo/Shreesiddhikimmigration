module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AgentDocument", {
    id: {
   
    company_reg_paper: DataTypes.STRING,
    company_gst_paper: DataTypes.STRING,
    company_pan_number: DataTypes.STRING,
  },
 {
    indexes: [

  }
);
};
