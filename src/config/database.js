const { Sequelize } = require("sequelize");
require("dotenv").config();

const se
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

module.exports = sequelize;
