var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    googleId: String,
    team: String,
    avatar: String,
    experience: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);