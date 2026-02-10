//src/controllers/product.controller.js 
const Product = require('../models/product.model');
const { successResponse, errorResponse } = require('../utils/response');
const activityLogService = require('../services/activityLog.service');

/* Create a new product */
exports.createProduct = async (req, res, next) => {
    try {
        const { 
            name,
            sku,
            barcode,
            subCategory,
            brance,
            costPrice,
            sellingPrice,
            expiryDate,
            reorderLevel,
            unit,
            description,
            images
        } = req.body;

        /* Basic validation */
        if (!name || !sku || ! costPrice || sellingPrice == null) {
            return res.status(400).json(errorResponse('Name, SKU, Cost Price and Selling Price are required'));
        }

        /* Check SKU eniqueness */
        const existingProduct = await Product.findOne({ sku });
        if (existingProduct) {
            return errorResponse(res, 409, 'Product with this SKU already exists');
        }

        /* Create new product */
        const product = await Product.create({
            name,
            sku,
            barcode,
            category,
            subCategory,
            brance,
            costPrice,
            sellingPrice,
            expiryDate,
            reorderLevel,
            unit,
            description,
            images
        });

        /* Log activity */
        await activityLogService.logActivity(req.user.id, 'CREATE_PRODUCT', `Created product ${product.name} (ID: ${product._id})`);

        return successResponse(res, 201, 'Product created successfully', product);
    } catch (error) {
        console.error('Error creating product:', error);
        return errorResponse(res, 500, 'An error occurred while creating the product');
    }
};

/* Get all products */
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return successResponse(res, 200, 'Products retrieved successfully', products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return errorResponse(res, 500, 'An error occurred while fetching products');
    }
};

/* Get a product by ID */
exports.getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return errorResponse(res, 404, 'Product not found');
        }
        return successResponse(res, 200, 'Product retrieved successfully', product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return errorResponse(res, 500, 'An error occurred while fetching the product');
    }
};

/* Update a product */
exports.updateProduct = async (req, res, next) => {
    try {
        const updates = req.body;
        const product = await Product.findById(req.params.id);
        if (!product) {
            return errorResponse(res, 404, 'Product not found');
        }

        // Prevent SKU duplication
        if (updates.sku && updates.sku !== product.sku) {
            const existingProduct = await Product.findOne({ sku: updates.sku });
            if (existingProduct) {
                return errorResponse(res, 409, 'Product with this SKU already exists');
            }
        }

        // Apply updates
        Object.keys(updates).forEach(key => {
            product[key] = updates[key];
        });

        await product.save();

        /* Log activity */
        await activityLogService.logActivity(req.user.id, 'UPDATE_PRODUCT', `Updated product ${product.name} (ID: ${product._id})`);

        return successResponse(res, 200, 'Product updated successfully', product);
    } catch (error) {
        console.error('Error updating product:', error);
        return errorResponse(res, 500, 'An error occurred while updating the product');
    }
};

/* Delete a product */
exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return errorResponse(res, 404, 'Product not found');
        }

        // Log activity before deletion
        await activityLogService.logActivity(req.user.id, 'DELETE_PRODUCT', `Deleted product ${product.name} (ID: ${product._id})`);

        await product.remove();
        return successResponse(res, 200, 'Product deleted successfully');
    } catch (error) {
        console.error('Error deleting product:', error);
        return errorResponse(res, 500, 'An error occurred while deleting the product');
    }
};

