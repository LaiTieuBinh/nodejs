class SiteController {
    indexHome(req, res) {
        res.render('home');
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
