const express = require('express');
const router = express.Router();
const partController = require('../app/controllers/PartController');

router.get('/create', partController.create);
router.post('/store', partController.store);
router.get('/:slug/edit', partController.edit);
router.put('/:slug', partController.update);
router.delete('/:id', partController.delete);
router.get('/:slug', partController.show);
module.exports = router;
