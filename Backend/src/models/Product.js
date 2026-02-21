//src/models/Product.js   

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    supplier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    cost_price: {
        type: Number,
        required: true,
        min: 0
    },
    selling_price: {
        type: Number,
        required: true,
        min: 0  
    },
    reorder_level: {
        type: Number,
        required: true,
        min: 0
    },
    stock_quantity: {
        type: Number,
        required: true,
        min: 0
    },
    is_active: {
        type: Boolean,
        default: true
    }   
}, { timestamps: true });    

module.exports = mongoose.model('Product', productSchema);

