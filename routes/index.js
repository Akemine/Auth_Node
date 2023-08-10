const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const { ensureAuthenticated } = require('../config/security.config');
const router = require('express').Router();

// Système de sub routing, redirige vers les véritables routes (users, auth, etc)
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/protected', ensureAuthenticated, (req, res) => {
    res.render("protected")
});

// Par défaut on retourne la page index avec la valeur du user (session)
router.get('/', (req, res) => {
    res.render('index', {user: req.user});
});

module.exports = router