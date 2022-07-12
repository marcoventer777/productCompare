const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const router = express.Router();
const query = require('../database/query');
const { audience, domain } = require('../config');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}}/.well-known/jwks.json`,
  }),
  audience: audience,
  algorithms: ['RS256'],
});

router.get('/products', checkJwt, async (req, res) => {
  let results = await query.GetProducts(req.query.key);
  res.json(results.recordset);
});

router.get('/protected', checkJwt, async (req, res) => {
  res.json({ message: 'success' });
});

router.get('/product/:id', checkJwt, async (req, res) => {
  let results = await query.GetProduct(req.params.id);
  res.json(results.recordset);
});

router.get('/product/:id/prices', checkJwt, async (req, res) => {
  let results = await query.GetPricesForProduct(req.params.id);
  res.json(results.recordset);
});

// Add admin checks
router.post('/product/:name', checkJwt, async (req, res) => {
  let result = await query.AddProduct(req.params.name);
  res.status(200).json(result);
});

router.post('/store/:name', checkJwt, async (req, res) => {
  let result = await query.AddStore(req.params.name);
  res.status(200).json(result);
});

router.post('/price/:product/:store/:price', checkJwt, async (req, res) => {
  let result = await query.AddPrice(
    req.params.product,
    req.params.store,
    req.params.price
  );
  res.status(200).json(result);
});

module.exports = router;
