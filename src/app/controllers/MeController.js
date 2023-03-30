const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

/* get param
    get: req.query
    post: req.body
*/

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {

        // Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        //     .then(([courses, deletedCount]) =>
        //         res.render("me/stored-courses", {
        //             courses: multipleMongooseToObject(courses),
        //             deletedCount,
        //         })
        //     )
        //     .catch();

        try {
            const [courses, deletedCount] = await Promise.all([Course.find({}), Course.countDocumentsDeleted()]);
            res.render("me/stored-courses", {
                            courses: multipleMongooseToObject(courses),
                            deletedCount,
                        })
        } catch (error) {
            
        }
    }

    async trashCourses(req, res, next) {
        try {
            const courses = await Course.findDeleted({});
            res.render("me/trash-courses", {
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {}
    }
}

module.exports = new MeController();
