const app = require("./src/app");
const db = require("./src/models");
require("dotenv").config();

const PORT = process.env.PORT || 5000;


db.sequelize.authenticate()
  .then(() => console.log("MySQL authenticated"))
  .catch(err => console.error("DB error:", err));


db.sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
});
