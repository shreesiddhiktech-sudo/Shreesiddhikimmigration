// const Joi = require("joi");

// exports.agentSignup = {
//   body: Joi.object({
//     name: Joi.string().required().optional(),
//     email: Joi.string().email().required().optional(),
//     phone: Joi.string().min(10).required(),
//     password: Joi.string().min(6).required(),
//     user_type: Joi.string().valid("1").required(),

//     company_reg_paper: Joi.string().required(),
//     company_gst_paper: Joi.string().required(),
//     company_pan_number: Joi.string().optional(),
//   }),
// };

// exports.studentSignup = {
//     body: Joi.object({
//         name: Joi.string().required(),
//         email: Joi.string().email().required(),
//         phone: Joi.string().min(10).required(),
//         password: Joi.string().min(6).required(),
//         user_type: Joi.string().valid("2").required(),
//     }),
// };

// exports.login = {
//   body: Joi.object({
//     user_id: Joi.string().required(),
//     password: Joi.string().required(),
//     user_type: Joi.string().valid("1", "2").required(),
//   }),
// };


const Joi = require("joi");

exports.agentSignup = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).required(),
    password: Joi.string().min(6).required(),
    user_type: Joi.number().valid(1).required(),

    company_reg_paper: Joi.string().required(),
    company_gst_paper: Joi.string().required(),
    company_pan_number: Joi.string().optional(),
  }),
};

exports.studentSignup = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).required(),
    password: Joi.string().min(6).required(),
    user_type: Joi.number().valid(2).required(),
  }),
};

exports.login = {
  body: Joi.object({
    user_id: Joi.string().required(),
    password: Joi.string().required(),
    user_type: Joi.number().valid(1, 2).required(),
  }),
};
