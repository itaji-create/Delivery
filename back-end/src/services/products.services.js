const { Product } = require('../database/models');

const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};

const getPageProducts = async (page) => {
  const perPage = 15;
  const offset = (page - 1) * perPage;
  const products = await Product.findAll({
    limit: perPage,
    offset: offset
  });
  return products;
}

module.exports = {
  getProducts,
  getPageProducts
};
