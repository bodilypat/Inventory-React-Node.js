//src/controllers/stock.controller.js 

const Stock = require('../models/stock.model');
const Product = require('../models/product.model');
const { successResponse, errorResponse } = require('../utils/response');
const activityLogService = require('../services/activityLog.service');

/* Get stock by product  */
exports.getStockByProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const stock = await Stock.findOne({ product: productId }).populate('product', 'name sku reorderLevel');
        if (!stock) {
            return errorResponse(res, 404, 'Stock not found for the given product');
        }
        
        return successResponse(res, 200, 'Stock retrieved successfully', stock);
    } catch (error) {
        console.error('Error fetching stock by product:', error);
        return errorResponse(res, 500, 'An error occurred while fetching stock');
    }
};

/* Create stock record (initial stock) */
exports.creteStock = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Check if product exists
        if (!productId || quantity == null ) {
            return  errorResponse(res, 400, 'Product ID and quantity are required');
        }

        const product = await Product.findById(productId);
        if (!product) {
                return errorResponse(res, 404, 'Product not found');
        }
        
        // Check if stock record already exists for the product
        const existingStock = await Stock.findOne({ product: productId });
        if (existingStock) {
            return errorResponse(res, 409, 'Stock already exists for this product');
        }

        // Create new stock record
        const newStock = new Stock({
            product: productId,
            quantity
        });

        await activityLogService.logActivity(
            req.user.id,
            'CREATE_STOCK',
            `Created stock for product ${product.name} with quantity ${quantity}`
        );

        return successResponse(res, 201, 'Stock created successfully', newStock);
    } catch (error) {
        console.error('Error creating stock:', error);
        return errorResponse(res, 500, 'An error occurred while creating stock');
    }
};

/* Adjust stock (IN / OUT / ADJUST) */
exports.adjustStock = async (req, res) => {
    try {
        const { productId, quantity, type, reason } = req.body;

        // Validate input
        if (!productId || quantity == null || !type) {
            return errorResponse(res, 400, 'Product ID, quantity, and type are required');
        }

        if (!['IN', 'OUT', 'ADJUST'].includes(type)) {
            return errorResponse(res, 400 'Invalid adjustment type');
        }

        const stock = await Stock.findOne({ product: productId }).populate('product', 'name sku reorderLevel');
        if (!stock) {
            return errorResponse(res, 404, 'Stock not found for the given product');
        }

        // Adjust stock quantity based on type
        const preQty = stock.quantity;
        if (type === 'IN') {
            stock.quantity += quantity;
        } else if (type === 'OUT') {
            if (stock.quantity < quantity) {
                return errorResponse(res, 400, 'Insufficient stock for OUT adjustment');
            }

            stock.quantity -= quantity;
        } else if (type === 'ADJUST') {
            stock.quantity = quantity;
        }
        await stock.save();

        await activityLogService.logActivity(
            req.user.id,
            'ADJUST_STOCK',
            `Adjusted stock for product ${stock.product.name} from ${preQty} to ${stock.quantity} (Type: ${type}, Reason: ${reason || 'N/A'})`
        );
        return successResponse(res, 200, 'Stock adjusted successfully', stock);
    } catch (error) {
        console.error('Error adjusting stock:', error);
        return errorResponse(res, 500, 'An error occurred while adjusting stock');  
    }
};

/* Get all low stock products */
exports.getLowStock = async (req, res) => {
    try {
        const stocks = await Stock.find().populate('product', 'name sku reorderLevel');
        const lowStockProducts = stocks.filter(stock => stock.quantity <= stock.product.reorderLevel);
        return successResponse(res, 200, 'Low stock products retrieved successfully', lowStockProducts);
    } catch (error) {
        console.error('Error fetching low stock products:', error);
        return errorResponse(res, 500, 'An error occurred while fetching low stock products');
    }
};


