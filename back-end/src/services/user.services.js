const { User } = require('../database/models');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const signIn = async ({ email, password }) => {
    const user = await User.findOne({
      where: { email, password: md5(password) },
      attributes: { exclude: ['password'] },
    });
  
    if (!user) throw new Error('email or password not found');
  
    return user;
};

const token = async ({ email, password }) => {
    const jwtConfig = {
      algorithm: 'HS256',
    };
  
    const secret = fs.readFileSync('jwt.evaluation.key').toString();
    return jwt.sign({ data: { email, password } }, secret, jwtConfig);
  };

module.exports = {
    signIn,
    token,
}