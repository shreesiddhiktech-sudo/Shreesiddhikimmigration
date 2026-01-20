const router = require("express").Router();
const controller = require("../controllers/country.controller");
const validate = require("../middlewares/validate.middleware");
const { countrySchema } = require("../validations/index");

router.post("/", validate(countrySchema),controller.createCountries);
router.get("/", controller.getCountries);

module.exports = router;
