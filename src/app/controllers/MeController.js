const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

/* get param
    get: req.query
    post: req.body
*/

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({});
            res.render("me/stored-courses", { courses : multipleMongooseToObject(courses)});
        } catch (error) {}
    }
}

module.exports = new MeController();
