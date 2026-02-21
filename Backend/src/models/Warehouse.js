//src/models/Warehouse.js   

const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    warehouse_name: {
        type: String,
        required: true,
    },
    location: String,
    capacity: Number,
    contact_number: String,
    email: String,
    manager_name: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('Warehouse', warehouseSchema);

