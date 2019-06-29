const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
    simp: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    trad: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    en: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    cnpro: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    twpro: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    },
    exp: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    }
});


module.exports = mongoose.model('Word', WordSchema);