const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
const id = '1';

router.use(`/detail`, newsController.show);
router.use(`/:${id}`, newsController.getNews(id));
router.use('/', newsController.index);

module.exports = router;
