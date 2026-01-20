const Joi = require("joi");

exports.paypalSettingSchema = Joi.object({
  status: Joi.string().valid("Enabled", "Disabled").required(),
  client_id: Joi.string().required(),
  client_secret: Joi.string().required(),
  environment: Joi.string().valid("Sandbox", "Live").required(),
  credit_account_id: Joi.number().integer().allow(null)
});
