const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const securitySchema = new Schema({
    ticker: {
        type: String,
    },
    asset: {
        type: String,
        default: 'Stock',
        enum: ['Stock', 'ETF', 'Mutual Fund', 'Bond', 'Call', 'Put'],
    }, 
    purchaseDate: {
        type: Date,
    },
    tradePrice: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
}, {
    timestamps: true,
});

const portfolioSchema = new Schema({
    user: Schema.Types.ObjectId, ref: 'User',
    cash: Number, 
    security: [securitySchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
