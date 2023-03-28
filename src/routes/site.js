const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
const id = 1;

router.post('/search', siteController.addSearch);
router.get('/', siteController.indexHome);
router.get('/profile', siteController.indexProfile);
router.get('/search', siteController.indexSearch);

module.exports = router;
