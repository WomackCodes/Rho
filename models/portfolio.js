const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const portfolioSchema = new Schema({
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
}, {
    timestamps: true,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
