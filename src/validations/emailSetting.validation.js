c
  smtp_host: Joi.string().required(),
  smtp_port: Joi.number().integer().required(),
  smtp_username: Joi.string().required(),
  smtp_password: Joi.string().required(),
  smtp_encryption: Joi.string().allow(null, ""),
});

module.exports = {
  emailSettingSchema,
};