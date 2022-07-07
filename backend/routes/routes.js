const express = require('express');
const query = require('../database/query');
const router = express.Router();

router.get('/', async(req, res) => {
    await query.GetProducts();
    // console.log(results);
    res.send('Welcome to ProductCompare')
});

module.exports = router;