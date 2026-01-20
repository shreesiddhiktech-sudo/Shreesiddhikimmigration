const Joi = require("joi");

exports.createCustomerSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  company_name: Joi.string().min(2).max(150).required(),
  mobile: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  currency: Joi.string().length(3).uppercase().required()
});

exports.updateCustomerSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  email: Joi.string().email().optional(),
  mobile: Joi.string().pattern(/^[6-9]\d{9}$/).optional(),
  currency: Joi.string().length(3).uppercase().optional()
});
