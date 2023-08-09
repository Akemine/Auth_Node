const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const router = require('express').Router();

// Système de sub routing, redirige vers les véritables routes (users, auth, etc)
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router