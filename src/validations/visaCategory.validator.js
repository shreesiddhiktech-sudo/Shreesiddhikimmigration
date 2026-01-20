const Joi = require("joi");



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
