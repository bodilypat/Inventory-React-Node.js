//src/models/Application.js 

const mongoose = require('mongoose');

const applicationShema = new mongoose.Schema({
    application: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobApplication'},
        visaType: String,
        country: String,
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    }, { timestamps: true });

module.exports = mongoose.model('Application', applicationShema);