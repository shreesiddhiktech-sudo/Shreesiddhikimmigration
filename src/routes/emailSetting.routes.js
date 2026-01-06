const express = require("express");
const { createOrUpdateEmailSetting, getEmailSetting, updateEmailSetting, deleteEmailSetting } = require("../controllers/emailSetting.controller");
const router = express.Router();

router.post("/email-settings", createOrUpdateEmailSetting);
router.get("/email-settings", getEmailSetting);
router.put("/email-settings/:id", updateEmailSetting);
router.delete("/email-settings/:id", deleteEmailSetting);

module.exports = router;