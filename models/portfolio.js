const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
    asset: {
        type: String,
        enum: ['CVS', 'AAPL', 'WORK', 'TSLA', 'SPY'],
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
    cash: {
        type: Number,
        balance: 10000,
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
