const Joi = require("joi");

const visaDocumentSchema = Joi.object({
  visaType: Joi.string()
    .valid("study", "work")
    .required()
    .messages({
      "any.only": "visaType must be either 'study' or 'work'",
      "any.required": "visaType is required",
    }),

 

 
});

module.exports = {
  visaDocumentSchema,
};
