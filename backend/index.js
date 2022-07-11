const serverless = require('serverless-http');
const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*',
}));
app.use('/api', routes);

module.exports.handler = serverless(app);
