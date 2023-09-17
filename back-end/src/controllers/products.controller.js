const productsServices = require('../services/products.services');

const getProducts = async (req, res) => {
  try {
    const products = await productsServices.getProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getPageProducts = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const products = await productsServices.getPageProducts(page);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

 const createProduct = async (req, res) => {
  try {
    const newProduct = await productsServices.createProduct(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getPageProducts,
  createProduct
};
