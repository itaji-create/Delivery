const express = require('express');

const router = express.Router();

const { getPageProducts, createProduct } = require('../controllers/products.controller');
const { tokenAuthenticador } = require('../middlewares/errors');
const { checkAccessAdmin } = require('../middlewares/user.validation');

router
  .get('/', tokenAuthenticador, getPageProducts)
  .post('/register', checkAccessAdmin, createProduct);

module.exports = router;
