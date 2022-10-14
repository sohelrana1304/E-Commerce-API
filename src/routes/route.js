const express = require('express');
const router = express.Router();
const {createProduct} = require('../controller/productController')

// Route handler for our Product API
router.post('/product', createProduct)


module.exports = router