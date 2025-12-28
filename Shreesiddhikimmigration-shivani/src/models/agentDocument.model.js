module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AgentDocument", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    company_reg_paper: DataTypes.STRING,
    company_gst_paper: DataTypes.STRING,
    company_pan_number: DataTypes.STRING,
  });
};
