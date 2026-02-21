//src/models/StockMovement.js
 
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    warehouse_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse',
    },
    quantity: {
        type: Number,
        required: true,
    },
    movement_type: {
        type: String,
        enum: ['Purchase', 'Sale', 'Adjustment'],
        required: true,
    },
    reference_id: mongoose.Schema.Types.ObjectId,
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('StockMovement', supplierSchema);

