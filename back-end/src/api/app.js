const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('../routes/index')

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
routes(app);

module.exports = app;
