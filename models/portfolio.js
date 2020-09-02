const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
    asset: {
        type: String,
        enum: ['Stock', 'ETF', 'Mutual Fund', 'Bond', 'Call', 'Put'],
        default: 'Stock',
    }, 
    purchaseDate: {
        type: Date,
    },
}, {
    timestamps: true,
});

const portfolioSchema = new mongoose.Schema({
    cash: {
        type: Number,
    }, 
    asOf: {
        type: Date,
        default: function() {
            return new Date();
        }, 
    },
    security: [securitySchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
