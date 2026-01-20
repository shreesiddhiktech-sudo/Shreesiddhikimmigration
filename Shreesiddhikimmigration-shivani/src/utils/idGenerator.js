
exports.generateUserId = async (User, prefix) => {
  const lastUser = await User.findOne({
    where: {
      user_id: {
        [require("sequelize").Op.like]: `${prefix}%`,
      },
    },
    order: [["createdAt", "DESC"]],
  });

  let nextNumber = 10001; 

  if (lastUser && lastUser.user_id) {
    const lastNumber = parseInt(lastUser.user_id.slice(prefix.length));
    nextNumber = lastNumber + 1;
  }

  return `${prefix}${nextNumber}`;
};
