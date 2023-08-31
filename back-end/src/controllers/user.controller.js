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
}

const getUsers = async (req, res) => {
  try {
    const sellers = await loginService.getUsers();
    return res.status(200).json(sellers);
  } catch (error) {
    return res.status(409).json({ message: error.message })
  }
}

module.exports = {
    signIn,
    signUp,
    getSellers,
    getUsers
};
