const express = require('express');

const router = express.Router();

const { signIn, signUp, getSellers, getUsers, deleteUser, getToken } = require('../controllers/user.controller');
const { signInValidation, signUpValidation, checkAccessAdmin } = require('../middlewares/user.validation');
router
  .get('/sellers', getSellers)
  .get('/getUsers', checkAccessAdmin, getUsers)
  .post('/signIn', signInValidation, signIn)
  .post('/token', getToken)
  .post('/signUp', signUpValidation, signUp)
  .delete('/delete/:id', checkAccessAdmin, deleteUser);

module.exports = router;
