const express = require('express');
const router = express.Router();
const securitiesCtrl = require('../controllers/securities');

router.get('/new', securitiesCtrl.new);
router.get('/', securitiesCtrl.show);
router.post('/', securitiesCtrl.create);
router.delete('/securities/:id', securitiesCtrl.delete);


module.exports = router;