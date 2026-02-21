//src/models/SaleOrderItems.js 

const mongoose = require('mongoose');

const saleOrderItemSchema = new mongoose.Schema({
    sale_order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SaleOrder',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    unit_price: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('SaleOrderItem', saleOrderItemSchema);
