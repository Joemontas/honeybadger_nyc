const LocalStrategy = require('passport-local').Strategy;
const User = require('../model').user;
const bcrypt = require('bcrypt');

function processSignupCallback(req, email, password, done) {
    user.findOne({
        where: {
            email
        },
        attributes: ['id']
    })
    .then(function(user) {
        const userToCreate = req.body;
        // if (user) {
        //     return done(null, false);
        // }

        // const userToCreate = req.body;

        bcrypt.hash(userToCreate.password, 10, function(err, hash) {
            userToCreate.password = hash;
            User.create(userToCreate)
            .then(funciton(user) {
                user.password = undefined;
                return done(null, user);
            })
        });
    });
}

function processLoginCallback(email, password, done) {
    User.findOne({
        where: {
            email
        }
    })
    .then(function(user) {
        if(!user) {
            return done(null, false);
        }

        bcrypt.compare(password, user.password, function(err, result) {
            user.password = undefined;
            return result ? done(null, user) : done(null, err);
        });
    });
}

module.exports = function(passport) {
    passport.serialize(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        password: 'password',
        passReqCallback: true
    }, processSignupCallback));

    passport.use('local-login', new LocalStrategy( {
        usernameField: 'email',
        passwordField: 'password'
    }, processLoginCallBack));
}