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

const createProduct = async ({ name, price, urlImage }) => {
  const userName = await Product.findOne({ where: { name } });
  if (userName) throw new Error('name already exists');

  const newUser = await Product.create({ name, price, urlImage });
  return newUser;
}

module.exports = {
  getProducts,
  getPageProducts,
  createProduct
};
