const express = require("express");
const router = express.Router();
const controller = require("../controllers/currencySetting.controller");

router.post("/currency-settings", controller.createOrUpdateCurrencySetting);
router.get("/currency-settings", controller.getCurrencySetting);

module.exports = router;
