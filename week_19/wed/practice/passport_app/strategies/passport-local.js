var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;

function processSignupCallback(req, email, password, done) {
    UserModel.findOne({
    where: {
    'email' : email
    },
    attributes: ['id']
    })
    .then(function(user) {
    // check to see if theres already a user with that email
    if (user) {
    return done(null, false, 'That email is already taken.');
    } else {
    var userToCreate = req.body;
    bcrypt.hash(userToCreate.password, 10, function(err, hash) {
    userToCreate.password = hash;
    UserModel.create(userToCreate)
    .then(function(createdRecord) {
    createdRecord.password = undefined;
    return done(null, createdRecord);
    });
    });
    }
    });

function processSignupCallback(req, email, password, done) {
    User.findOne({
            where: {
                'email': email
            },
            attributes: ['id']
        })
        .then(function (user) {
            if (user) {
                return done(null, false);
            } else {

                User.create(req.body)
                    .then(function (user) {
                        user.password = undefined;
                        return done(null, user);
                    });
            }
        });
}

module.exports = function (passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, processSignupCallback)); // <<-- more on this to come
};
