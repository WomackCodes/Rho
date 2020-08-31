const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    balance: {
        type: Number,
    }, 
    asOf: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }, 
    },
    security: [securitySchema],
}, {
    timestamps: true,
});

const securitySchema = new Schema({
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

module.exports = mongoose.model('Portfolio', portfolioSchema);