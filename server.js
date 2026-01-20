const app = require("./src/app");
const db = require("./src/models");
require("dotenv").config();

const PORT = proc

db.sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
});
