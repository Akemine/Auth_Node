const { createUser } = require("../queries/user.queries");

exports.userNew = (req, res, next) => {
    res.render('signup')
}

exports.userCreate = async (req, res, next) => {
    try {
        const body = req.body;
        const user = await createUser(body);
        res.redirect('/')
    } catch (error) {
        console.log(e)
        res.render("signup", { error: error.message })
    }
}