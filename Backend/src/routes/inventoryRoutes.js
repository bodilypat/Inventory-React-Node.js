//src/routes/inventoryRoutes.js 

const express = require('express');
const router = express.Router();
const { getInventoryByProductId, updateInventoryQuantity  } = require('../controllers/inventoryController');

const { protect, authorize } = require('../middleware/authMiddleware');

// Get inventory for a product 
router.get('/:productId', protect, authorize('admin', 'manager', 'sales'), getInventoryByProductId);

// Update inventory quantity for a product
router.put('/:productId', protect, authorize('admin', 'manager'), updateInventoryQuantity);

