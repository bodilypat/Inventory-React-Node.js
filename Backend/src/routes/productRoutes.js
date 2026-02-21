//src/routes/productRoute.js 

const express = require('express');
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

//Public routes
router.get('/products', getProducts);
router.get('/products/:id', getProductById);

// Protected (Admin/Manager) 
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;

