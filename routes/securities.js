const express = require('express');
const router = express.Router();
const securitiesCtrl = require('../controllers/securities');
const securities = require('../controllers/securities');

router.get('/securities/new', securitiesCtrl.new);
router.get('/securities/show', securitiesCtrl.show);
router.delete('/securities/:id', securitiesCtrl.delete);
router.post('/portfolios/:id/securities', securitiesCtrl.create)


module.exports = router;