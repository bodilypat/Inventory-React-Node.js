//src/moels/role.model.js 
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true,
        uppercase: true,
        trim: true,
    },
    permissions: [
        { 
            type: String,
            trim: true,
        }
    ],
    description: { 
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Role', roleSchema);

