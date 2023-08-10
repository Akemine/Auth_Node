const {sessionNew, sessionCreate, sessionDelete, googleAuth, googleAuthCb, facebookAuth, facebookAuthCb } = require('../controllers/auth.controller')
const router = require('express').Router();

router.get('/signin/form', sessionNew);
router.post('/signin', sessionCreate);
router.get('/signout', sessionDelete);
router.get('/google', googleAuth);
router.get('/google/cb', googleAuthCb);
router.get('/facebook', facebookAuth);
router.get('/facebook/cb', facebookAuthCb);

module.exports = router;