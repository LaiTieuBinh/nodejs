const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.put('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);


module.exports = router;
