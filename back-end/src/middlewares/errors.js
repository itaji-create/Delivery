const jwt = require('jsonwebtoken');
const fs = require('fs');

const tokenAuthenticador = (req, res, next) => {
  const secret = fs.readFileSync('jwt.evaluation.key').toString();
  const { authorization } = req.headers;
    try {
      if (!authorization) return res.status(401).json({ message: 'Token do not exist' });
      jwt.verify(authorization, secret);
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
};

module.exports = {
  tokenAuthenticador,
};
