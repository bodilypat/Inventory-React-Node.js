//src/models/Setting.js 

const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
    setting_key: {
        type: String,   
        required: true,
        unique: true
    },
    setting_value: String,
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);

