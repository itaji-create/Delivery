const { User } = require('../database/models');
const md5 = require('md5');

const signIn = async ({ email, password }) => {
    const user = await User.findOne({
      where: { email, password: md5(password) },
      attributes: { exclude: ['password'] },
    });
  
    if (!user) throw new Error('email or password not found');
  
    return user;
};

module.exports = {
    signIn
}