//src/utils/constants.js 

export const PRODUCT_STATUS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    OUT_OF_STOCK: 'out_of_stock',
    DISCONTINUED: 'discontinued'
};

export const SALE_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
    REFUNDED: 'refunded'
};

export const USER_ROLES = {
    ADMIN: 'admin',
    CUSTOMER: 'customer',
    GUEST: 'guest'
};

export const PAYMENT_METHODS = {
    CREDIT_CARD: 'credit_card',
    PAYPAL: 'paypal',
    BANK_TRANSFER: 'bank_transfer',
    CASH_ON_DELIVERY: 'cash_on_delivery'
};

export const SHIPPING_METHODS = {
    STANDARD: 'standard',
    EXPRESS: 'express',
    OVERNIGHT: 'overnight'
};

export const ORDER_STATUSES = {
    NEW: 'new',
    PROCESSING: 'processing',
    SHIPPED: 'shipped',
    DELIVERED: 'delivered',
    CANCELLED: 'cancelled'
};

