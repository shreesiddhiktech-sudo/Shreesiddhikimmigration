const bcrypt = require("bcrypt");
const db = require("../models");
const { generateUserId } = require("../utils/idGenerator");

const User = db.User;
const AgentDocument = db.AgentDocument;

/* ================== SIGNUP ================== */

// exports.signup = async (req, res) => {
//   const t = await db.sequelize.transaction();

//   try {
//     const { user_type, email, phone, password } = req.body;

//     const existingUser = await User.findOne({
//       where: { email },
//     });

//     if (existingUser) {
//       return res.status(409).json({
//         status: 1,
//         message: "User already registered",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     let userId;
//     let status = 0;
//     let is_verified = 1;

//     if (user_type === "1") {
//       userId = await generateUserId(User, "AGT");
//       status = 2;       // unverified agent
//       is_verified = 0;
//     } else {
//       userId = await generateUserId(User, "STD");
//     }

//     const user = await User.create(
//       {
//         ...req.body,
//         user_type : parseInt(user_type),
//         user_id: userId,
//         password: hashedPassword,
//         status,
//         is_verified,
//       },
//       { transaction: t }
//     );

//     if (user_type === 1) {
//       await AgentDocument.create(
//         {
//           user_id: userId,
//           company_reg_paper: req.body.company_reg_paper,
//           company_gst_paper: req.body.company_gst_paper,
//           company_pan_number: req.body.company_pan_number,
//         },
//         { transaction: t }
//       );
//     }

//     await t.commit();

//     return res.status(201).json({
//       status: 0,
//       message: "User registered successfully",
//       data: {
//         user_id: userId,
//         user_type,
//       },
//     });
//   } catch (err) {
//     await t.rollback();
//     return res.status(500).json({
//       status: 1,
//       message: err.message,
//     });
//   }
// };

exports.signup = async (req, res) => {
  const t = await db.sequelize.transaction();

  try {
    const user_type = Number(req.body.user_type);
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
if (existingUser) {
  return res.json({
    status: 1,
    message: "User already registered",
  });
}

const t = await db.sequelize.transaction();

    const hashedPassword = await bcrypt.hash(password, 10);

    let user_id;
    let is_verified = 1;
    let responseStatus = 0;
    let message = "Registered successfully";

    if (user_type === 1) {
      user_id = await generateUserId(User, "AGT");
      is_verified = 0;
      responseStatus = 2;
      message = "Agent registered, verification pending";
    }

    if (user_type === 2) {
      user_id = await generateUserId(User, "STD");
    }

    await User.create(
      {
        user_id,
        name: req.body.name,
        email,
        phone: req.body.phone,
        password: hashedPassword,
        user_type,
        is_verified,
      },
      { transaction: t }
    );

    if (user_type === 1) {
      await AgentDocument.create(
        {
          user_id,
          company_reg_paper: req.body.company_reg_paper,
          company_gst_paper: req.body.company_gst_paper,
          company_pan_number: req.body.company_pan_number,
        },
        { transaction: t }
      );
    }

    await t.commit();

    return res.status(201).json({
      status: responseStatus,
      message,
      data: { user_id },
    });
  } catch (err) {
    if (t) await t.rollback(); // ✅ safe rollback
    return res.status(500).json({
      status: 1,
      message: err.message,
    });
  }
};


/* ================== LOGIN ================== */


exports.login = async (req, res) => {
  const { user_id, password, user_type } = req.body;

  const user = await User.findOne({ where: { user_id, user_type } });

  if (!user) {
    return res.json({
      status: 1,
      message: "Invalid credentials",
    });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({
      status: 1,
      message: "Invalid credentials",
    });
  }

  if (user_type === 1 && user.is_verified === 0) {
    return res.json({
      status: 2,
      message: "Agent not verified",
      data: { user_id },
    });
  }

  return res.json({
    status: 0,
    message: "Login successful",
    data: { user_id },
  });
};
