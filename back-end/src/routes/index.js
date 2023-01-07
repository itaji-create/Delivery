const userRouter = require('./user.routes');
const productsRouter = require('./products.routes');
const salesRouter = require('./sales.routes');

const routes = (app) => {
  app.use('/user', userRouter);
  app.use('/products', productsRouter);
  app.use('/sales', salesRouter);
};

module.exports = routes;
