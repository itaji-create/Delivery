const { User, Sequelize } = require('../database/models');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const getSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });
  return sellers;
};

const getUsers = async () => {
  const users = await User.findAll({ where: {
    role: {
      [Sequelize.Op.not]: 'administrator'
    }
  } });
  return users;
};

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

const signUp = async ({ name, role = 'customer', email, password }) => {
    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) throw new Error('email already exists');
  
    const userName = await User.findOne({ where: { name } });
    if (userName) throw new Error('name already exists');
  
    const newUser = await User.create({ name, role, email, password: md5(password) });
    return newUser; 
};

module.exports = {
  getSellers,
  signIn,
  token,
  signUp,
  getUsers
}