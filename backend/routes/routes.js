const express = require('express');
const router = express.Router();
const query = require('../database/query');

router.get('/products', async(req, res) => {
     let results = await query.GetProducts();
    console.log(results.recordset);
    res.json(results.recordset);
});

module.exports = router;