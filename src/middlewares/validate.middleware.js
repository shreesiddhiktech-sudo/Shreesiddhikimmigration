module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
    ils.map((d) => d.message),
      });
    }

    next();
  };
};
