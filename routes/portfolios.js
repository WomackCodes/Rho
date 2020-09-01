const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios');


router.get('/portfolios', function (req, res, next) {
    res.render('/portfolios/index', { title: 'Portfolios', portfolio: req.portfolio })
});
// router.get('/new', portfoliosCtrl.new);
// router.post('/', portfoliosCtrl.create);

module.exports = router;