var LocalStragtegy = require( 'passport-local' ).Strategy;

module.exports = function(passport) {
    passport.use( 'local-signup', new LocalStragtegy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, processSignupCallback));

    function processSignupCallback(req, email, password, done) {
        // first search to see if a user exist in out system with that email
        User.findOne({
            where:{ 'email': email },
            attributes: ['id'] })
            .then(function(user) {
                if(user) {
                    // user exists call done() passing null and false
                    return done(null, false);
                } else {
                    // create the new user
                    var userToCreate = req.body;

                    UserModel.create(userToCreate)
                    .then(function(createdRecord) {
                        // once user is created call done with the created user
                        createRecord.password = undefined;
                        return done(null, createdRecord);
                    });

                }

        });

    }