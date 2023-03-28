const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose")

class SiteController {
    indexHome(req, res, next) {
        // res.render('home');

        Course.find({})
            .then((courses) => {
                courses = multipleMongooseToObject(courses);
                res.render("home", {
                    courses,
                });
            })
            .catch(next);
    }

    indexProfile(req, res) {
        res.render("profile");
    }

    indexSearch(req, res) {
        res.render("search");
    }

    addSearch(req, res, id) {
        res.send(id);
    }
}

module.exports = new SiteController();
