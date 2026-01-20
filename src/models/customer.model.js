module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    picture: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    currency: DataTypes.STRING
  }, {
    tableName: "customers",
    timestamps: false
  });

  return Customer;
};
