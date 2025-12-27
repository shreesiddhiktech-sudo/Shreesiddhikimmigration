const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/visacategories", require("./routes/visacategory.routes"));
app.use("/api/countries", require("./routes/country.routes"));
app.use("/api", require("./routes/agentVisa.routes"));
app.use("/api", require("./routes/studyWorkVisaountry.routes"));
app.use("/api/visa", require("./routes/visaDocument.routes"));

module.exports = app;
