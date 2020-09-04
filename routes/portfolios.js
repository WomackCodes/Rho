const express = require('express');
const router = express.Router();
const portfoliosCtrl = require('../controllers/portfolios');

router.get('/', portfoliosCtrl.index);
router.get('/new', portfoliosCtrl.new);
router.get('/:id', portfoliosCtrl.show);
router.post('/', portfoliosCtrl.create);
router.delete('/:id', portfoliosCtrl.delete);
// router.get('/:id/edit', portfolioCtrl.edit);
router.put('/:id', portfoliosCtrl.update);

module.exports = router;