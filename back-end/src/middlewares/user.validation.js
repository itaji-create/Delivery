const tokenAuthenticador = require("../utils/tokenAuthenticador");

const signInValidation = (req, res, next) => {
    const { email, password } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return res.status(400).json({ message: '"Email" field must have the following format: "name@email.com"' });
    if (password.length < 6) return res.status(400).json({ message: '"Password" field must have at least 6 characters' });
    next();
};

const signUpValidation = (req, res, next) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const { name, email, password } = req.body;
    if (name.length < 12) return res.status(400).json({ message: '"Name" field must have at least 12 characters' });
    if (!emailRegex.test(email)) return res.status(400).json({ message: '"Email" field must have the following format: "name@email.com"' });
    if (password.length < 6) return res.status(400).json({ message: '"Password" field must have at least 6 characters' });
    next();
};

const checkAccessAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  const payload = tokenAuthenticador(token);

  if (payload && payload.role === 'administrator') {
    next();
  } else {
    return res.status(403).json(payload);
  }
}

module.exports = {
    signInValidation,
    signUpValidation,
    checkAccessAdmin
};