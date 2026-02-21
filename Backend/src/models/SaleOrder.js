//src/models/SaleOrder.js

const mongoose = require('mongoose');

const saleOrderSchema = new mongoose.Schema({
    customer_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Customer', 
        required: true
        },
        status: {
            type: String,
            enum: ['pending', 'approved','shipped', 'cancelled'],
            default: 'pending'
        },
        total_amount: {
            type: Number,
            required: true,
            min: 0
        },
}, { timestamps: true });

module.exports = mongoose.model('SaleOrder', saleOrderSchema);

