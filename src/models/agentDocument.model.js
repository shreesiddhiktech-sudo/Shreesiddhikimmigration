module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AgentDocument", {
    id: {
        type: DataTypes.INTEGER,
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
  },
 {
    indexes: [
      {
        unique: false,
        fields: ['user_id']
      }
    ]
  }
);
};
