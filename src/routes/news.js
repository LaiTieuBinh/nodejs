const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
const id = '1';

router.get(`/detail`, newsController.show);
router.get(`/:${id}`, newsController.getNews(id));
router.get('/', newsController.index);

module.exports = router;
