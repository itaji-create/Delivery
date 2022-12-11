const express = require('express');

const router = express.Router();

const { signIn, signUp } = require('../controllers/user.controller');
const { signInValidation } = require('../middlewares/user.validation');
router
  .post('/signIn', signInValidation, signIn)
  .post('/signUp', signUp);

module.exports = router;
