const serverless = require('serverless-http');
const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const app = express();
app.use(
  cors({
    origin: ['http://localhost:4200', 'https://product-compare.bbdgp.cloud'],
  })
);

app.use('/api', routes);

app.use(function (req, res, next) {
  if (err.name === 'NotFoundError') {
    res
      .status(404)
      .send({ message: "This doesn't exist. Look somewhere else" });
  } else next(err);
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({
      message: "You're not permitted to access this resource. Get lost!",
    });
  } else next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Looks like we have some work to do' });
});

module.exports.handler = serverless(app);
