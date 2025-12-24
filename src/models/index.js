const sequelize = require("../config/database");

const db = {};
db.Sequelize = require("sequelize");
db.sequelize = sequelize;

// Models
db.User = require("./user.model")(sequelize, db.Sequelize);
db.AgentDocument = require("./agentDocument.model")(sequelize, db.Sequelize);
db.VisaCategory = require("./visaCategory.model")(sequelize, db.Sequelize);
db.Country = require("./country.model")(sequelize, db.Sequelize);
db.AgentVisaFile = require("./agentVisaFile.model")(sequelize, db.Sequelize);

// Associations
db.User.hasOne(db.AgentDocument, { foreignKey: "user_id", sourceKey: "user_id" });
db.AgentDocument.belongsTo(db.User, { foreignKey: "user_id", targetKey: "user_id" });
module.exports = db;
