const mongoose = require('mongoose');
const WordSchema = require('../models/word').Schema

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    words: {
        type: [WordSchema],
    }
});





module.exports = mongoose.model('User', UserSchema);
