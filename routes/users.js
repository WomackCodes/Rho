const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/users', function (req, res, next) {
  res.render('user', { title: 'Express' });
});


// // if you want to have functionality for only when user is
// // authenticated, use example below from 11.1 in OAuth Lesson
// router.post('/facts', isLoggedIn, studentsCtrl.addFact);
// // DELETE /facts/:id
// router.delete('/facts/:id', isLoggedIn, studentsCtrl.delFact);

module.exports = router;

// Insert this middleware for routes that require a logged in user
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');
// }