const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

/* get param
    get: req.query
    post: req.body
*/

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        
        let courseQuery = Course.find({});

        if(req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        // Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        //     .then(([courses, deletedCount]) =>
        //         res.render("me/stored-courses", {
        //             courses: multipleMongooseToObject(courses),
        //             deletedCount,
        //         })
        //     )
        //     .catch();

        try {
            const [courses, deletedCount] = await Promise.all([courseQuery, Course.countDocumentsDeleted()]);
            res.render("me/stored-courses", {
                            courses: multipleMongooseToObject(courses),
                            deletedCount,
                        })
        } catch (error) {
            
        }
    }

    // [GET] /me/trash/courses
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
