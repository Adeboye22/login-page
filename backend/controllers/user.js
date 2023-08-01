require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');

register = async(req, res) => {
const {firstname, lastname, dob, email, password} = req.body;
const cryptPassword = bcrypt.hashSync(password, 10);

const newUser = {firstname: firstname, lastname: lastname, dob: dob, email: email, password: cryptPassword};

    User.create(newUser)
        .then(() => {
            res.jsonp({success : true});
        })
        .catch((err) => {
            res.send(err.message);
        })

};

module.exports = register;