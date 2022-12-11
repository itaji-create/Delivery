const express = require('express');

const app = express();
const routes = require('../routes/index')

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
routes(app);

module.exports = app;
