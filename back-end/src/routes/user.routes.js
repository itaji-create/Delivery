const express = require('express');

const router = express.Router();

const { signIn } = require('../controllers/user.controller');

router
  .post('/signIn', signIn);

module.exports = router;
