//src/models/PurchaseOrderItem.js 

const mongoose = require('mongoose');

const purchaseOrderItemSchema = new mongoose.Schema({
   purchase_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PurchaseOrder',
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
    unit_cost: {
        type: Number,
        required: true,
        min: 0
    },
}, { timestamps: true});

module.exports = mongoose.model('PurchaseOrderItem', purchaseOrderItemSchema);


