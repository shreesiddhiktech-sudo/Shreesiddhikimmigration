const db = require("../models");
const { emailSettingSchema } = require("../validations/emailSetting.validation");
const EmailSetting = db.EmailSetting;

    const existing = await EmailSetting.findOne();

    if (existing) {
    const updatedData=  await existing.update(req.body);
      return res.status(200).json({ status: 1,status_code: 200, data:updatedData, message: "Email settings already for this user" });
    } else {
       const response= await EmailSetting.create(req.body);
      return res.status(200).json({ status: 1, status_code: 200, data:response, message: "Email settings saved successfully" });
    }

  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 0, status_code: 500, data:{}, message: "Server error" });
  }
};

// GET email settings
 const getEmailSetting = async (req, res) => {
  try {
  ror } = emailSettingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ status: 0, status_code: 400, message: error.details[0].message });
    }

    const setting = await EmailSetting.findByPk(id);
    if (!setting) {
      return res.status(404).json({ status: 0, status_code: 404, message: "Email setting not found" });
    }

   const updated = await  setting.update(req.body);

    return res.status(200).json({ status: 1,status_code: 200, data: updated, message: "Email setting updated successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 0, status_code: 500, data:{}, message: "Server error" });
  }
};

// DELETE by ID
 const deleteEmailSetting = async (req, res) => {
  try {
    const { id } = req.params;

    const setting = await EmailSetting.findByPk(id);
    if (!setting) {
      return res.status(404).json({ status: 0, status_code: 404, data: {}, message: "Email setting not found" });
    }

    await setting.destroy();

    return res.status(200).json({ status: 1, status_code: 200, data: {}, message: "Email setting deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 0, status_code: 500, data:{}, message: "Server error" });
  }
};


module.exports = {
  createOrUpdateEmailSetting,
  getEmailSetting,  
    updateEmailSetting,
    deleteEmailSetting,
};