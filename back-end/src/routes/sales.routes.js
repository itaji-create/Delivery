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
  getSalesBySellerId,
} = require('../controllers/sales.controller');

const { tokenAuthenticador } = require('../middlewares/errors');

router
  .get('/:id', getSaleById)
  .get('/', getSales)
  .post('/', tokenAuthenticador, createSale)
  .get('/products/:id', getSalesOfProduct)
  .post('/products', tokenAuthenticador, createSaleOfProduct)
  .get('/products', getSalesProducts)
  .get('/userId/:id', salesByUserId)
  .get('/seller/:id', getSalesBySellerId);

module.exports = router;
