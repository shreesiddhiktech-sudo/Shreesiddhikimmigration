const db = require("../models");
const { emailSettingSchema } = require("../validations/emailSetting.validation");
const EmailSetting = db.EmailSetting;

// CREATE or UPDATE (single rowit existing.update(req.body);
      return res.status(200).json({ status: 1,status_code: 200, data:updatedData, message: "Email settings already for this user" });
    } else {
       const response= await EmailSetting.create(req.body);
      return res.status(200).json({ status: 1, status_code: 200, data:response, message: "Email settings saved successfully" });
    }
};

// UPDATE by ID
 const updateEmailSetting = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = emailSettingSchema.validate(req.body);
    if (error) {
      retur
};

};


module.exports = {
  createOrUpdateEmailSetting,
  getEmailSetting,  
    updateEmailSetting,
    deleteEmailSetting,
};