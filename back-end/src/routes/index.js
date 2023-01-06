const userRouter = require('./user.routes');
const productsRouter = require('./products.routes');

const routes = (app) => {
  app.use('/user', userRouter);
  app.use('/products', productsRouter);
};

module.exports = routes;
