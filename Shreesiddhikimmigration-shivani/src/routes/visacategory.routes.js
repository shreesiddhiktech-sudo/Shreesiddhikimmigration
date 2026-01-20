const router = require("express").Router();
const controller = require("../controllers/visacategories.controller");
const validate = require("../middlewares/validate.middleware");
const { visaCategorySchema } = require("../validations/index");

router.post("/", validate(visaCategorySchema), controller.createVisaCategories);
router.get("/", controller.getVisaCategories);

module.exports = router;
