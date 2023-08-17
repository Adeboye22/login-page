require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async(req, res) => {
const {firstname, lastname, email, password} = req.body;
const cryptPassword = bcrypt.hashSync(password, 10);

const newUser = {firstname: firstname, lastname: lastname, email: email, password: cryptPassword };

    User.create(newUser)
        .then(() => {
            res.jsonp({success : true})
        })
        .catch((err) => {
            res.send(err.message);
        })

};

exports.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if (!user) {
        res.send("User not found");
    }
    const plainPassword = bcrypt.compareSync(password, user.password);
    if (plainPassword) {
        res.send("login successful");
    }

}