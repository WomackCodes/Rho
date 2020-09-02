const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    googleID: {
        type: String
    },
    avatar: {
        type: String
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);