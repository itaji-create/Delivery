const loginService = require('../services/user.services');

const signIn = async (req, res) => {
  try {
    const user = await loginService.signIn(req.body);
    const token = await loginService.token(req.body);

    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
    signIn,
};
