
exports.generateUserId = async (User, prefix) => {
  const lastUser = await User.findOne({
    where: {
      user_id: {
     
  if (lastUser && lastUser.user_id) {
    const lastNumber = parseInt(lastUser.user_id.slice(prefix.length));
    nextNumber = lastN