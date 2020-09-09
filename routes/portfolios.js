const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios');

router.get('/', portfoliosCtrl.index);
router.get('/new', portfoliosCtrl.new);
router.get('/:id', isLoggedIn, portfoliosCtrl.show);
router.post('/', isLoggedIn, portfoliosCtrl.create);
router.delete('/:id', isLoggedIn, portfoliosCtrl.delete);
// router.get('/:id/edit', portfolioCtrl.edit);
router.put('/:id', isLoggedIn, portfoliosCtrl.update);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;