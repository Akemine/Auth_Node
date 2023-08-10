const User = require("../database/models/user.model");

// Create an account from Local session
// Password is encrypted by bcript
exports.createUser = async (body) => {
    try {
        const hashedPassword = await User.hashPassword(body.password)
        const user = new User({
            username: body.username,
            local: {
                email: body.email,
                password: hashedPassword
            }
        })
        return user.save();
    } catch (error) {
        throw error;
    }
}

// Return an account from local email
exports.findUserPerEmail = (email) => {
    return User.findOne({ 'local.email': email }).exec();
}

// Return an account from Google ID
exports.findUserPerGoogleId = (googleId) => {
    return User.findOne({ 'local.googleId': googleId }).exec();
}

// Return an account from Facebook ID
exports.findUserPerFacebookId = (facebookId) => {
    return User.findOne({ 'local.facebookId': facebookId }).exec();
}