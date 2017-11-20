const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'Your must provide email and password' });
    }

    //See if user with mail exists
    User.findOne({ email: email }, (err, existingUser) => {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'Email already exists' });
        }
    });
    //If user with email not exists create ansave record
    const user = new User({
        email: email,
        password: password
    })

    user.save((err) => {
        if (err) {
            return next(err);
        }

        res.json({ token: tokenForUser(user) });
    });
}

exports.signin = (req, res, next) => {
    //user already have email and password, he just need a token
    const user = req.user;
    res.json({ token: tokenForUser(user) });
}