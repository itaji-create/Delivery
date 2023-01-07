const { Sale, SaleProduct, Product, User } = require('../database/models');

const getSales = async () => {
  const sales = await Sale.findAll();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    ],
  });
  return sale;
};

const getSalesProducts = async () => {
  const sales = await SaleProduct.findAll();
  return sales;
};

const getSalesOfProduct = async (id) => {
  const sale = await SaleProduct.findAll({
    where: { saleId: id },
  });
  return sale;
};

const createSale = async (sale) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  } = sale;
  
  const sales = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
  });

  return sales;
};
const salesByUserId = async (userId) => {
  const orders = await Sale.findAll({ where: { userId },
  });
  return orders;
};

const createSaleOfProduct = async (products) => {
  for (let i = 0; i < products.length; i += 1) {
    const e = products[i];
    const { saleId, id: productId, qtd: quantity } = e;
    SaleProduct.create({ saleId, productId, quantity });
  }
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
