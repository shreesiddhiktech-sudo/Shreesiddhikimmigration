module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

  
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,

    user_type: {
      type: DataTypes.ENUM("1", "2"),
    },

 : DataTypes.TINYINT,
      defaultValue: 2,
    },
  });
};
