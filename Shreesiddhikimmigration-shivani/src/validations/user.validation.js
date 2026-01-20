const Joi = require("joi");

exports.createUser = {
  body: Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
  }),
};
