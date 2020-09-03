const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
    asset: {
        type: String,
    }, 
    purchaseDate: {
        type: Date,
    },
    count: {
        type: Number,
    },
    purchasePrice: {
        type: Number,
    },
}, {
    timestamps: true,
});

const portfolioSchema = new mongoose.Schema({
    name: String,
    cash: {
        type: Number,
        default: 10000,
    },
    marketValue: {
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
