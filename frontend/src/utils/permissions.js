//src/utils/permissions.js 

export const roles = {
    admin: 'admin',
    manager: 'manager',
    staff: 'staff',
    user: 'user',
};

export const canAccess = (userRole, requiredRole) => {
    return userRole === requiredRole || userRole === roles.admin;
};

export const hasPermission = (userRole, permissions) => {
    return permissions.includes(userRole) || userRole === roles.admin;
};

export const getUserRole = (user) => {
    return user.role || roles.user;
};

export const isAdmin = (user) => {
    return user.role === roles.admin;
};

export const isManager = (user) => {
    return user.role === roles.manager;
};

export const isStaff = (user) => {
    return user.role === roles.staff;
};

export const isUser = (user) => {
    return user.role === roles.user;
};

export const checkAccess = (user, requiredRole) => {
    const userRole = getUserRole(user);
    return canAccess(userRole, requiredRole);
};

export const checkPermissions = (user, permissions) => {
    const userRole = getUserRole(user);
    return hasPermission(userRole, permissions);
};

export const getAccessibleRoutes = (user, routes) => {
    const userRole = getUserRole(user);
    return routes.filter(route => hasPermission(userRole, route.permissions));
};  
