const mongoose = require('mongoose');

const userReg = new mongoose.Schema({
    firstname : {
        type : String,
        trim: true,
        minlength: 2,
        required: true
    },
    lastname: {
        type: String,
        minlenght: 2,
        trim: true,
        required: true
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        maxlength: 100,
        minlenght: 3,
        trim: true,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userReg);