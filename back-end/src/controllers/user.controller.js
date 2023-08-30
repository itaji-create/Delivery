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

const signUp = async (req, res) => {
    try {
      const token = await loginService.token(req.body);
      const newUser = await loginService.signUp(req.body);

      return res.status(201).json({ newUser, token });
    } catch (error) {
      return res.status(409).json({ message: error.message });
    }
};

const getSellers = async (req, res) => {
  try {
    const sellers = await loginService.getSellers();
    return res.status(200).json(sellers);
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
};

const deleteUser = async (req, res) => {
  try {
    const destroyed = await loginService.deleteUser(req.body);
    return res.status(202).json(destroyed);
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
};

module.exports = {
    signIn,
    signUp,
    getSellers,
    deleteUser
};
