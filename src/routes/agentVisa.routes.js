const router = require("express").Router();
const controller = require("../controllers/agentVisa.controller"
router.post("/agent/submit-files", controller.submitFiles);

module.exports = router;
