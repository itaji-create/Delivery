const express = require('express');

const router = express.Router();

const { signIn, signUp } = require('../controllers/user.controller');

router
  .post('/signIn', signIn)
  .post('/signUp', signUp);

module.exports = router;
