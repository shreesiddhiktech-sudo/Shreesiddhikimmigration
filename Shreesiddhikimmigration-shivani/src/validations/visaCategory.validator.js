const Joi = require("joi");

const visaCategorySchema = Joi.array().items(
  Joi.object({
    code: Joi.string()
      .valid("STD", "WRK", "TOUR")
      .required(),

    name: Joi.string()
      .valid("Study Visa", "Work Visa", "Tourist Visa")
      .required(),

    visible_to: Joi.string()
      .valid("STUDENT", "AGENT",)
      .required(),
  })
).min(1);

module.exports = {
  visaCategorySchema,
};
