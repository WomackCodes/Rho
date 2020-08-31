var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    experience: Number,
    cohort: String,
    avatar: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);