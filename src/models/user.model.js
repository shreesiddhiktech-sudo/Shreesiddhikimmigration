module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },

    user_id: {
      type: DataTypes.STRING(10),
      unique: true,
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

    is_verified: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },

    status: {
      type: DataTypes.TINYINT,
      defaultValue: 2,
    },
  });
};
