//src/controllers/role.controller.js 

const Role = require('../models/role.model');
const { successResponse, errorResponse } = require('../utils/response');
const activityLogService = require('../services/activityLog.service');

/* Create a new Role */
exports.createRole = async (req, res, next) => {
    try {
        const { name, permissions, description } = req.body;

        if (!name) {
            return res.status(400).json(errorResponse('Role name is required'));
        }

        const existingRole = await Role.findOne({name: name.toUpperCase()});
        if (existingRole) {
            return res.status(400).json(errorResponse('Role name already exists'));
        }

        const role = await Role.create({
            name: name.toUpperCase(),
            permissions: permissions || [],
            description: description || '',
        });

        // Log activity
        await activityLogService.logActivity({
            userId: req.user.id,
            action: 'create_role',
            details: `Created role: ${name}`,
        });
        res.status(201).json(successResponse(role));
    } catch (error) {
        console.error('Error creating role:', error);
        next(error);
    }
};
/* Get all roles */
exports.getAllRoles = async (req, res, next) => {
    try {
        const roles = await Role.find();
        return successResponse(res, 200, 'Roles fetched successfully', roles);
    } catch (error) {
        console.error('Error fetching roles:', error);
        next(error);
    }
};

/* Get a role by ID */
exports.getRoleById = async (req, res, next) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) {
            return  successResponse(res, 404, 'Role not found');
        }

        return successResponse(res, 200, 'Role fetched successfully', role);
    } catch (error) {
        console.error('Error fetching role:', error);
        next(error);
    }
};

/* Update a role (name or permissions, descriptions) */
exports.UpdateRole = async (req, res, next) => {
    try {
        const { name, permissions, description } = req.body;
        const role = await Role.findById(req.params.id);

        if (name) role.name = name.toUpperCase();
        if (permissions) role.permissions = permissions;
        if (description) role.description = description;

        await role.save();
        // Log activity
        await activityLogService.logActivity({
            userId: req.user.id,
            action: 'update_role',
            details: `Updated role: ${role.name}`,
        });

        return successResponse(res, 200, 'Role updated successfully', role);
    } catch (error) {
        console.error('Error updating role:', error);
        next(error);
    }
};

/* Delete a role */
exports.deleteRole = async (req, res, next) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id);   

        if (!role) {
           return errorResponse(res, 404, 'Role not found');
        }

        // Log activity
        await activityLogService.logActivity({
            userId: req.user.id,
            action: 'delete_role',
            details: `Deleted role: ${role.name}`,
        });
        return successResponse(res, 200, 'Role deleted successfully');
    } catch (error) {
        console.error('Error deleting role:', error);
        next(error);
    }
};


/* Assign permissions to a role */
exports.assignPermissions = async (req, res, next) => {
    try {
        const { permissions } = req.body;
        if (!permissions || !Array.isArray(permissions)) {
            return errorResponse(res, 400, 'Permissions must be an array');
        }

        const role = await Role.findById(req.params.id);
        if (!role) {
            return errorResponse(res, 404, 'Role not found');
        }

        role.permissions = permissions;
        await role.save();

        // Log activity
        await activityLogService.logActivity({
            userId: req.user.id,
            action: 'assign_permissions',
            details: `Assigned permissions to role: ${role.name}`,
        });

        return successResponse(res, 200, 'Permissions assigned successfully', role);
    } catch (error) {
        console.error('Error assigning permissions:', error);
        next(error);
    }
};


