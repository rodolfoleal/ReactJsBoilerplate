const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');
const passport = require('passport');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password || !username) {
        return res.status(422).send({ error: 'Your must provide Username, email and password' });
    }

    //Checkif Username already exists
    User.findOne({ 'local.username': username }, (err, existingUser) => {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'Username already exists' });
        }
    });

    //See if user with mail exists
    User.findOne({ 'local.email': email }, (err, existingUser) => {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: 'Email already exists' });
        }
    });


    //If user with email not exists create ansave record
    const user = new User({
        local:
        {
            username,
            email,
            password
        }
    })

    user.save((err) => {
        if (err) {
            return next(err);
        }

        res.json({ token: tokenForUser(user), user: user });
    });
}

exports.signin = (req, res, next) => {
    //user already have email and password, he just need a token
    const user = req.user;
    res.json({ token: tokenForUser(user), user: user });
}

exports.signinWithToken = (req, res, next) => {
    //user already have email and password, he just need a token
    const user = req.user;

    var token = tokenForUser(user);
    res.redirect(`${config.singinCallback}?token=${token}`);
}