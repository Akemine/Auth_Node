// Middleware qui vérifie qu'un user est connecté afin d'accéder à des routes protégés.
exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).redirect('/auth/signin/form')
    }
}

// Middleware qui vérifie que l'user est un ROLE_ADMIN
exports.ensureAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.roles.includes('ROLE_ADMIN')) {
        next();
    } else {
        res.status(403).redirect('/auth/signin/form')
    }
}