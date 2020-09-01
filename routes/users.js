const express = require('express');
const router = express.Router();
// const usersCtrl = require('../controllers/users');

// /* GET home page. */
router.get('/users', function (req, res, next) {
  res.render('users/user', { title: 'Rho Login', user: req.user })
});

module.exports = router;

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}