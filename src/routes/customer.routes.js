const express = require("express");
const router = express.Router();
const controller = require("../controllers/customer.controller");
const upload = require("../middlewares/customerUpload");
const { validate } = require("../middlewares/validate.middleware");
const { createCustomerSchema, updateCustomerSchema } = require("../validations/customer.validation");

router.post("/customers", upload.single("picture"),  validate(createCustomerSchema), controller.create);
router.get("/customers", controller.findAll);
router.get("/customers/:id", controller.findOne);
router.put("/customers/:id", upload.single("picture"), validate(updateCustomerSchema), controller.update);
router.delete("/customers/:id", controller.remove);

module.exports = router;
