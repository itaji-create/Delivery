const express = require('express');

const router = express.Router();

const { signIn, signUp, getSellers, getUsers, deleteUser } = require('../controllers/user.controller');
const { signInValidation, signUpValidation } = require('../middlewares/user.validation');
router
  .get('/sellers', getSellers)
  .get('/getUsers', getUsers)
  .post('/signIn', signInValidation, signIn)
  .post('/signUp', signUpValidation, signUp)
  .delete('/delete/:id', deleteUser);

module.exports = router;
