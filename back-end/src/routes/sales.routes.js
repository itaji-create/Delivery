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

router
  .get('/:id', getSaleById)
  .get('/', getSales)
  .post('/', createSale)
  .get('/products/:id', getSalesOfProduct)
  .post('/products', createSaleOfProduct)
  .get('/products', getSalesProducts)
  .get('/', salesByUserId);

module.exports = router;
