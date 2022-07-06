const serverless = require('serverless-http');
const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use('/api', routes);

module.exports.handler = serverless(app);
