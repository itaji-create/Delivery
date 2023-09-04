const express = require('express');

const router = express.Router();

const { getPageProducts } = require('../controllers/products.controller');

router
  .get('/', getPageProducts);

module.exports = router;
