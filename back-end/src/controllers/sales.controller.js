const saleServices = require('../services/sales.services');

const getSales = async (req, res) => {
  try {
    const sales = await saleServices.getSales();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getSaleById = async (req, res) => {
  try {
    const sale = await saleServices.getSaleById(req.params.id);
    return res.status(200).json(sale);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const createSale = async (req, res) => {
  try {
    const sales = await saleServices.createSale(req.body);
    return res.status(201).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getSalesProducts = async (req, res) => {
  try {
    const sales = await saleServices.getSalesProducts();
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getSalesOfProduct = async (req, res) => {
  try {
    const products = await saleServices.getSalesOfProduct(req.params.id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
  
const createSaleOfProduct = async (req, res) => {
  try {
    const sales = await saleServices.createSaleOfProduct(req.body);
    return res.status(201).json(sales);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const salesByUserId = async (req, res, _next) => {
  const { id } = req.params;
  const ordersUser = await saleServices.salesByUserId(id);
  return res.status(200).json(ordersUser);
};

module.exports = {
  getSales,
  getSaleById,
  createSale,
  createSaleOfProduct,
  getSalesProducts,
  getSalesOfProduct,
  salesByUserId,
};
