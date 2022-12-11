const express = require('express');

const router = express.Router();

const { signIn, signUp } = require('../controllers/user.controller');
const { signInValidation, signUpValidation } = require('../middlewares/user.validation');
router
  .post('/signIn', signInValidation, signIn)
  .post('/signUp', signUpValidation, signUp);

module.exports = router;
