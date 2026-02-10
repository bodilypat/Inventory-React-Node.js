//src/models/supplier.model.js       

const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    contactPerson: {
        type: String,
        required: true,        
        trim: true
    },
    contactDetails: {
        type: String,
        required: true,
        trim: true
     },
    isActive: {
        type: Boolean,
        default: true 
    }
}, {
    timestamps: true
});

// Indexs to prevent duplicates 
supplierSchema.index({ email: 1 }, { unique: true });
supplierSchema.index({ phone: 1 }, { unique: true });

model.exports = mongoose.model('Supplier', supplierSchema);


