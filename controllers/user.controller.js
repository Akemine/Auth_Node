const { createUser } = require("../queries/user.queries");

exports.userNew = (req, res, next) => {
    res.render('signup', {error: null})
}

// Create User
// Return an error if something wrong happened
exports.userCreate = async (req, res, next) => {
    try {
        const body = req.body;
        const user = await createUser(body);
        req.login(user, (err) => {
            if (err) { next(err) }
            res.redirect('/')
        })
    } catch (error) {
        res.render("signup", { error: error.message })
    }
}