const express = require("express");
const router = express.Router();
const controller = require("../controllers/currencySetting.controller");

router.post("/currency-settings", controller.createOrUpdateCurrencySetting);
ule.exports = router;
