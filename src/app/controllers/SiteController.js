const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    // indexHome(req, res, next) {
    //     Course.find({})
    //         .then((courses) => {
    //             courses = multipleMongooseToObject(courses);
    //             res.render("home", {
    //                 courses,
    //             });
    //         })
    //         .catch(next);
    // }

    async indexHome(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render("home", { courses : multipleMongooseToObject(courses)});
        } catch (error) {}
    }

    indexProfile(req, res) {
        res.render("profile");
    }

    indexSearch(req, res) {
        res.render("search");
    }

    addSearch(req, res, id) {
        res.send(req.body);
    }
}

module.exports = new SiteController();


/*
exports.getHome = async (req, res) => {
  try {
    const stories = await Story.find();
    const asks = await Ask.find();
    res.render('home', {stories, asks});
  } catch(e) {
    res.send('Sorry!');
  }
};
*/