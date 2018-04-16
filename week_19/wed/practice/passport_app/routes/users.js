var express = require('express');
var router = express.Router();

module.exports = function (passport) {
    // POST /user/signup
    router.post('/signup', function (req, res) {
        res.send('got the signup request')
    });

    router.post('/login', passport.authenticate('local-loggin', function(req, res) {
        res.json({user: req.user})
    }))

    return router;
};
