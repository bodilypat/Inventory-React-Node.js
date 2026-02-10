//src/controllers/supplier.controller.js

const Supplier = require('../models/supplier.model');
const { successResponse, errorResponse } = require('../utils/response');
const activityLogService = require('../services/activityLog.service');

/* Create a new supplier */
exports.createSupplier = async (req, res) => {
    try {
        const { 
            name, 
            email,
            phone,
            address,
            contactPerson,
            contactDetails
        } = req.body;

        if (!name || !email || !phone ) {
            return errorResponse(res, 400, 'Name, email and phone are required');
        }

        // Prevent duplicate supplier (by name or email)
        const existingSupplier = await Supplier.findOne({
            $or: [{ name: name.trim() }, { email: email.trim() }]
        });

        if (existingSupplier)
            return errorResponse(res, 409, 'Supplier with the same name or email already exists');
        }

        const supplier = await Supplier.create({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            address: address ? address.trim() : '',
            contactPerson: contactPerson ? contactPerson.trim() : '',
            contactDetails: contactDetails ? contactDetails.trim() : ''
        });

        await activityLogService.logActivity(
            req.user.id,
             'CREATE_SUPPLIER',
            `Created supplier: ${supplier.name} (ID: ${supplier._id})`
        );

        return successResponse(res, 201, 'Supplier created successfully', supplier);
    } catch (error) {
        console.error('Error creating supplier:', error);
        return errorResponse(res, 500, 'An error occurred while creating the supplier');
    }
};

/* Get all suppliers */
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find().sort({ createdAt: -1 });
        return successResponse(res, 200, 'Suppliers retrieved successfully', suppliers);
    } catch (error) {
        console.error('Error fetching suppliers:', error);
        return errorResponse(res, 500, 'An error occurred while fetching suppliers');
    }
};

/* Get a single supplier by ID */
exports.getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return errorResponse(res, 404, 'Supplier not found');
        }

        return successResponse(res, 200, 'Supplier retrieved successfully', supplier);
    } catch (error) {
        console.error('Error fetching supplier:', error);
        return errorResponse(res, 500, 'An error occurred while fetching the supplier');
    }
};

/* Update a supplier */
exports.updateSupplier = async (req, res) => {
    try {
        const updates = req.body;
        const supplier = await Supplier.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!supplier) {
            return errorResponse(res, 404, 'Supplier not found');
        }

        // Prevent duplicate email/name on update
        if (updates.name || updates.email) {
            const duplicate = await Supplier.findOne({
                _id: { $ne: req.params.id },
                $or: [
                    { name: updates.name ? updates.name.trim() : null },
                    { email: updates.email ? updates.email.trim() : null }
                ].filter(Boolean)
            });

            if (duplicate) {
                return errorResponse(res, 409, 'Supplier with the same name or email already exists');
            }
        }
        
        Object.keys(updates).forEach(key => {
            if (typeof updates[key] === 'string') {
                updates[key] = updates[key].trim();
            }
        });

        await supplier.save();

        await activityLogService.logActivity(
            req.user.id,
            'UPDATE_SUPPLIER',
            `Updated supplier: ${supplier.name} (ID: ${supplier._id})`
        );

        return successResponse(res, 200, 'Supplier updated successfully', supplier);
    } catch (error) {
        console.error('Error updating supplier:', error);
        return errorResponse(res, 500, 'An error occurred while updating the supplier');
    }
};

/* Delete a supplier */
exports.deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier) {
            return errorResponse(res, 404, 'Supplier not found');
        }

        // Hard delete (can be switched to soft delete easily)
        await supplier.deleteOne();

        await activityLogService.logActivity(
            req.user.id,
            'DELETE_SUPPLIER',
            `Deleted supplier: ${supplier.name} (ID: ${supplier._id})`
        );
        return successResponse(res, 200, 'Supplier deleted successfully');
    } catch (error) {
        console.error('Error deleting supplier:', error);
        return errorResponse(res, 500, 'An error occurred while deleting the supplier');
    }
};



