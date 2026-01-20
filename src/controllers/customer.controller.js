const db = require("../models");
const Customer = db.Customer;
const response = require("../utils/response");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {

    const userExist = await Customer.findOne({ where: { email: req.body.email } });
    if (userExist) {
      return response.error(res, { status_code: 400, message: "Email already in use" });
    }

    const data = {
      picture: req.file ? req.file.filename : null,
      name: req.body.name,
      company_name: req.body.company_name,
      email: req.body.email,
      mobile: req.body.mobile,
      currency: req.body.currency
    };

    const customer = await Customer.create(data);
    response.sendResponse(res, { status_code: 201, message: "Customer created", data: customer });
  } catch (err) {
    response.error(res, { status_code: 500, message: err.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const offset = (page - 1) * limit;

    const result = await Customer.findAndCountAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { company_name: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } }
        ]
      },
      limit: parseInt(limit),
      offset: parseInt(offset),
      order: [["id", "DESC"]]
    });

    response.sendResponse(res, { status_code: 200, message: "Customers fetched", data: result });
  } catch (err) {
    response.error(res, { status_code: 500, message: err.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return response.error(res, { status_code: 404, message: "Customer not found" });
    response.sendResponse(res, { status_code: 200, message: "Customer fetched", data: customer });
  } catch (err) {
    response.error(res, err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) data.picture = req.file.filename;

    const updated = await Customer.update(data, { where: { id: req.params.id } });

    response.sendResponse(res, { status_code: 200, message: "Customer updated", data: updated });
  } catch (err) {
    response.error(res, err.message);
  }
};

exports.remove = async (req, res) => {
  try {
    await Customer.destroy({ where: { id: req.params.id } });
    response.sendResponse(res, { status_code: 200, message: "Customer deleted" });
  } catch (err) {
    response.error(res, err.message);
  }
};
