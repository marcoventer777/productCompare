const express = require('express');
const router = express.Router();
const query = require('../database/query');

router.get('/products', async(req, res) => {
    let results = await query.GetProducts(req.query.key);
    res.json(results.recordset);
});

router.get('/product/:id', async(req, res) => {
    let results = await query.GetProduct(req.params.id);
    res.json(results.recordset);
});

router.get('/product/:id/prices', async(req, res) => {
    let results = await query.GetPricesForProduct(req.params.id);
    res.json(results.recordset);
});

router.post('/product/:name', async(req, res) => {
    let result= await query.AddProduct(req.params.name);
    res.status(200).json(result);
});

router.post('/store/:name', async(req, res) => {
    let result = await query.AddStore(req.params.name);
    res.status(200).json(result);
});

router.post('/price/:product/:store/:price', async(req, res) => {
    let result = await query.AddPrice(req.params.product, req.params.store, req.params.price);
    res.status(200).json(result);
});

module.exports = router;