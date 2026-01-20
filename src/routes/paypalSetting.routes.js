const express = require("express");
const router = express.Router();
const controller = require("../controllers/paypalSetting.controller");

router.post("/paypal-settings", controller.createOrUpdatePaypalSetting);
router.get("/paypal-settings", controller.getPaypalSetting);
router.put("/paypal-settings/:id", controller.updatePaypalSetting);
router.delete("/paypal-settings/:id", controller.deletePaypalSetting);

module.exports = router;
