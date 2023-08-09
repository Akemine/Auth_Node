const passport = require("passport")
const { app } = require('../app')
const User = require('../database/models/user.model');
const { findUserPerEmail } = require("../queries/user.queries");
const LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    done(null, user._id);
})


passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id).exec();
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

// On précise que le usernameField de LocalStrategy, doit get la clé "email" plutôt que username
passport.use('local', new LocalStrategy({ usernameField: 'email'}, async (email, password, done) => {
try {
    const user = await findUserPerEmail(email)
    if (user) {
        const match = await user.comparePassword(password)
        if (match) {
            done(null, user);
        } else {
            done(null, false, {message : "password doesn\'t match"})
        }
    } else {
        done(null, false, {message : "user not found"});
    }
} catch (error) {
    done(error);
}

}))