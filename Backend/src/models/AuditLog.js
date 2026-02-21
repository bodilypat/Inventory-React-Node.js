//src/models/AuditLog.js 

const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true
    },
    table_name: {
        type: String,
        required: true
    },
    record_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
}, { timestamps: {createdAt: 'created_at', updatedAt: false } });

module.exports = mongoose.model('AuditLog', auditLogSchema);
