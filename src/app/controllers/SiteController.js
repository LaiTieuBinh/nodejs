const Course = require('../models/Course');

class SiteController {
    indexHome(req, res) {
        // res.render('home');
        
        Course.find({})
            .then((courses) => res.json(courses))
            .catch((err) => res.status(400).json({error: 'ERROR!!!'}))
        
    }

    indexProfile(req, res) {
        res.render('profile');
    }

    indexSearch(req, res) {
        res.render('search');
    }

    addSearch(req, res, id) {
        res.send(id);
    }
}

module.exports = new SiteController();
