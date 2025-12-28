const Joi = require("joi");

const countrySchema = Joi.array().items(
  Joi.object({
    country_id: Joi.string()
      .min(2)
      .max(10)
      .required(),

    country_name: Joi.string()
      .min(2)
      .max(100)
      .required(),
  })
).min(1);

module.exports = {
  countrySchema,
};
