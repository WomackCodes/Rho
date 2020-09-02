const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios');

router.get('/', portfoliosCtrl.index);
router.get('/:id', portfoliosCtrl.show);
router.get('/new', portfoliosCtrl.new);
router.post('/', portfoliosCtrl.create);

module.exports = router;