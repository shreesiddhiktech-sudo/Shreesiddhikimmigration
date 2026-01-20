const express = require("express");
const router = express.Router();
const controller = require("../controllers/paypalSetting.controller");

router.get("/paypal-settings", controller.getPaypalSetting);
router.delete("/paypal-settings/:id", controller.deletePaypalSetting);

module.exports = router;
