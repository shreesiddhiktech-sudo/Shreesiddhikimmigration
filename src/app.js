const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/visacategories", require("./routes/visacategory.routes"));
app.use("/api/cooutes/emailSetting.routes"));


module.exports = app;
