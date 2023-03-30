const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.delete('/:id/force', courseController.forceDestroy);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.put('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);


module.exports = router;
