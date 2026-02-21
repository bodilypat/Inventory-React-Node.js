//src/models/PurchaseOrder.js

const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
    supplier_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Supplier', 
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved','received', 'cancelled'],
        default: 'pending'
    },
    total_amount: {
        type: Number,
        required: true,
        min: 0
    },
    items: [{
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
        unit_cost: {
            type: Number,
            required: true,
            min: 0
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);


