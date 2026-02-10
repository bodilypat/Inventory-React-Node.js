//src/models/category.model.js 

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null
    },
    description: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

/* Index to prevent duplicate category under the same parent  */
categorySchema.index({ name: 1, parentId: 1 }, { unique: true });

module.exports = mongoose.model('Category', categorySchema);
