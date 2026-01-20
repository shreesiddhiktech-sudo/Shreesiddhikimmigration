const Joi = require("joi");

  body: Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.().email().required(),
  }),
};
