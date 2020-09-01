const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    googleID: {
        type: String
    },
    team: {
        type: String
    },
    avatar: {
        type: String
    },
}, {
    timestamps: true

});

module.exports = mongoose.model('User', userSchema);