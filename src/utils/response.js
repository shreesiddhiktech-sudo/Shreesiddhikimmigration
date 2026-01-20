const sendResponse = (res, {
  status = 1,
  status_code = 200,
  message = "",
  data = {}
}) => {
  return res.status(status_code).json({
    status,
    status_code,
    message,
    data
  });
};

const error = (res, message, status_code = 500, data = {}) => {
  return res.status(status_code).json({
    status: 1,
    status_code,
    message,
    data
  });
};

module.exports = {
  sendResponse,
  error
};