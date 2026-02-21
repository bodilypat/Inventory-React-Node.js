//src/models/Inventory.js

const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    warehouse_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse',
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
},{ timestamps: { createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('Inventory', inventorySchema);
