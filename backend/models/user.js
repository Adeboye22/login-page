const mongoose = require('mongoose');

const userReg = new mongoose.Schema({
    firstname : {
        type : String,
        trim: true,
        required: true,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        minlenght: 2,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 100,
        minlenght: 3,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('User', userReg);