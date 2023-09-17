const express = require('express');

const router = express.Router();

const { getPageProducts } = require('../controllers/products.controller');
const { tokenAuthenticador } = require('../middlewares/errors');

router
  .get('/', tokenAuthenticador, getPageProducts);

module.exports = router;
