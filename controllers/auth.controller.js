const passport = require('passport')

// LOCAL ---------
exports.sessionNew = (req, res, next) => {
    res.render('signin', {error: null})
}

exports.sessionCreate = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(e);
    } else if (!user) {
      res.render('signin', { error: info.message });
    } else {
    // login ne retourne pas de promesse, donc forcément un callback (err) et pas d'await
      req.login(user, (err) => {
        if (err) {
          next(e);
        } else {
          res.redirect('/');
        }
      });
    }
  })(req, res, next);
};


exports.sessionDelete = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};


// Google -------

exports.googleAuth = (req, res, next) => {
  passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
  })(req, res, next);
}

exports.googleAuthCb = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/'
})(req, res, next);
}


// Facebook -------
exports.facebookAuth = (req, res, next) => {
  passport.authenticate('facebook')(req, res, next);
}

exports.facebookAuthCb = (req, res, next) => {
  passport.authenticate('facebook', {
    successRedirect: '/protected',
    failureRedirect: '/'
})(req, res, next);
};