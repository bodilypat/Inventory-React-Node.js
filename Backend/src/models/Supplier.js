//src/models/Supplier.js

const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplier_name: {
        type: String,
        required: true,
        unique: true
    },
    contact_name: String,
    contact_email: String,
    contact_phone: String,
    address: String,
    city: String,
    country: String,
    postal_code: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('Supplier', supplierSchema);

        