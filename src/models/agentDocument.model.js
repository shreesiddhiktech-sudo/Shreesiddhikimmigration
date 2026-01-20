module.exports = (sequelize, DataTypes) => {
  return sequelize.define("AgentDocument", {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },

   
        unique: false,
        fields: ['user_id']
      }
    ]
  }
);
};
