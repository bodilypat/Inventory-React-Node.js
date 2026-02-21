//src/routes/orderRoutes.js 

const express = require('express');
const router = express.Router();
const {
    createPurchaseOrder,
    createSalesOrder,
    getAllOrders
} = require('../controllers/orderController');

const { protect, authorize } = require('../middleware/authMiddleware');

// Protected routes 
router.post('/purchase', protect, authorize('admin', 'manager'), createPurchaseOrder);
router.post('/sales', protect, authorize('admin', 'sales'), createSalesOrder);
router.get('/', protect, authorize('admin', 'manager', 'sales'), getAllOrders);

module.exports = router;

