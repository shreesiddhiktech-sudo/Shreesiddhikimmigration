const Joi = require("joi");
 const emailSettingSchema = Joi.object({
  mail_type: Joi.string().required(),
  from_email: Joi.string().email().required(),
  from_name: Joi.string().required(),
  smtp_host: Joi.string().required(),
  smtp_port: Joi.number().integer().required(),
  

module.exports = {
  emailSettingSchema,
};