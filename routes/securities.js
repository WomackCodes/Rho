const express = require('express');
const router = express.Router();
const securitiesCtrl = require('../controllers/securities');

router.get('/:id', securitiesCtrl.show);
// router.get('/new', securitiesCtrl.new);
// router.post('/', securitiesCtrl.create);

module.exports = router;