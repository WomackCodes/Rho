var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    team: String,
    avatar: String,
}, {
    timestamps: true

});

module.exports = mongoose.model('User', userSchema);