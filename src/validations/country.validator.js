const Joi = require("joi");

const countrySchema = Joi.array().items(
  Joi.object({
 
      .max(100)
      .required(),
  })
).min(1);

module.exports = {
  countrySchema,
};
