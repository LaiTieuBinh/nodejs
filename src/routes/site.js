const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
const id = 1;

router.post('/search', siteController.addSearch);
router.get('/', siteController.indexHome);
router.use('/profile', siteController.indexProfile);
router.use('/search', siteController.indexSearch);

module.exports = router;
