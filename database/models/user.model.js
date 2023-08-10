const mongoose = require('mongoose')
const bcrypt = require('bcrypt') // hash password
const schema = mongoose.Schema;

// Model d'un USER
const userSchema = schema({
    local: {
        email: { type: String, require: true, unique: true },
        password: { type: String },
        googleId: { type: String },
        facebookId: { type: String },
    },
    username: String
   
});

// Fonction static qui permet le hashage d'un password avant insertion en bdd.
userSchema.statics.hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    } catch (error) {
        throw error
    }
}

// Fonction qui compare le password en base & celui fourni par le client
userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;