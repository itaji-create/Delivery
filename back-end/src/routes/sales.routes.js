const express = require('express');

const router = express.Router();

const {
  getSales,
  createSale,
  createSaleOfProduct,
  getSalesProducts,
  getSalesOfProduct,
  getSaleById,
  salesByUserId,
} = require('../controllers/sales.controller');

const { tokenAuthenticador } = require('../middlewares/errors');

router
  .get('/:id', getSaleById)
  .get('/', getSales)
  .post('/', tokenAuthenticador, createSale)
  .get('/products/:id', getSalesOfProduct)
  .post('/products', tokenAuthenticador, createSaleOfProduct)
  .get('/products', getSalesProducts)
  .get('/', salesByUserId);

module.exports = router;
