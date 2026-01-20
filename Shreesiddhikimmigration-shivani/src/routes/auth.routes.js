const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const validation = require("../validations/auth.validation");



router.post("/signup/student", validate(validation.studentSignup), controller.signup);

router.post("/signup/agent", validate(validation.agentSignup), controller.signup);
router.post("/login", validate(validation.login), controller.login);

module.exports = router;
