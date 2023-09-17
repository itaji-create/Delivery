const jwt = require('jsonwebtoken');
const fs = require('fs');

const tokenAuthenticador = (token) => {
  const secret = fs.readFileSync('jwt.evaluation.key').toString();
    try {
      if (!token) return { message: 'Token do not exist' };
      const payload = jwt.verify(token, secret);
      return payload;
    } catch (error) {
      return error;
    }
};

module.exports = tokenAuthenticador;
