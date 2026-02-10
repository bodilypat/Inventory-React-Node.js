//src/controllers/category.controller.js 

const Category = require('../models/category.model');
const { successResponse, errorResponse } = require('../utils/response');
const activityLogService = require('../services/activityLog.service');

/* Create a new category */
exports.createCategory = async (req, res) => {
    try {
        const { name, paremtId } = req.body;

        if (!name) {
            return errorResponse(res, 400, 'Category name is required');
        }
        
        // Prevent duplicate category under same parent 
        const existingCategory = await Category.findOne({ name, parentId: paremtId || null });
        if (existingCategory) {
            return errorResponse(
                res, 
                400, 
                'Category with the same name already exists under the same parent'
            );
        }

        const category = new Category({ name, parentId: paremtId || null });
        await activityLogService.logActivity(
            req.user.id,
            'CREATE_CATEGORY',
            `Created category: ${category.name}`
        );

        return successResponse(res, 201, 'Category created successfully', category);
    } catch (error) {
        console.error('Error creating category:', error);
        return errorResponse(res, 500, 'Internal server error');
    }
};

/* Get all categories (tree structure) */
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().lean();

        const buildTree = (parentId = null) => 
            categories
                .filter(category => String(category.parentId) === String(parentId))
                .map(category => ({
                    ...category,
                    children: buildTree(category._id)
                }));

        const categoryTree = buildTree();

        return successResponse(res, 200, 'Categories retrieved successfully', categoryTree);
    } catch (error) {
        console.error('Error retrieving categories:', error);
        return errorResponse(res, 500, 'Internal server error');
    }
};

/* Update a category */
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
            .populate('parentId', 'name');

        if (!category) {
            return errorResponse(res, 404, 'Category not found');
        }

        return successResponse(res, 200, 'Category retrieved successfully', category);
    } catch (error) {
        console.error('Error retrieving category:', error);
        return errorResponse(res, 500, 'Internal server error');
    }
};

/* Update a category */
exports.updateCategory = async (req, res) => {
    try {
        const { name, parentId } = req.body;

        const category = await Category.findById(req.params.id);
        if (!category) {
            return errorResponse(res, 404, 'Category not found');
        }

        // Prevent duplicate category under same parent
        if (parentId && parentId === String(category._id)) {
            return errorResponse(res, 400, 'A category cannot be its own parent');
        }

        // Prevent duplicate category under same parent
        if (name) {
            const existingCategory = await Category.findOne({
                name,
                parentId: parentId || category.parentId || null,
                _id: { $ne: category._id }
            });

            if (existingCategory) {
                return errorResponse(
                    res, 
                    409, 
                    'Category with the same name already exists under the same parent'
                );
            }

            category.name = name.trim();
        }

        if (parentId !== undefined) {
            category.parentId = parentId || null;
        }

        await category.save();

        await activityLogService.logActivity(
            req.user.id,
            'UPDATE_CATEGORY',
            `Updated category: ${category.name}`
        );

        return successResponse(res, 200, 'Category updated successfully', category);
    } catch (error) {
        console.error('Error updating category:', error);
        return errorResponse(res, 500, 'Internal server error');
    }
};

/* Delete a category */
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return errorResponse(res, 404, 'Category not found');
        }

        // Prevent delete if subcategories exist
        const childExists = await Category.exists({ parentId: category._id });
        if (childExists) {
            return errorResponse(
                res, 
                400,
                'Cannot delete category with subcategories'
            );
        }

        await category.deleteOne();

        await activityLogService.logActivity(
            req.user.id,
            'DELETE_CATEGORY',
            `Deleted category: ${category.name}`
        );

        return successResponse(res, 200, 'Category deleted successfully');
    } catch (error) {
        console.error('Error deleting category:', error);
        return errorResponse(res, 500, 'Internal server error');
    }
};
