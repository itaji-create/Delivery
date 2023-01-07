const express = require('express');

const router = express.Router();

// const mid = require('./middlewares/errors');
const {
  getSales,
  createSale,
  createSaleProducts,
  getSalesProducts,
  getSaleProducts,
  getSaleById,
  salesUserbyId,
} = require('../controllers/sales.controller');

router
  .get('/:id', getSaleById)
  .get('/', getSales)
  .post('/', createSale)
  .get('/products/:id', getSaleProducts)
  .post('/products', createSaleProducts)
  .get('/products', getSalesProducts)
  .get('/', salesUserbyId);

module.exports = router;
