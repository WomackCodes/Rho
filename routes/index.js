// landing page for the login 

const router = require('express').Router();
const passport = require('passport');


router.get('/', function(req, res) {
  res.render('index', { title: 'Login Page', user: req.user});
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/portfolios',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
