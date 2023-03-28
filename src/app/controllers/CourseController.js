const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

/* get param
    get: req.query
    post: req.body
*/

class CourseController {
    // Get /courses/:slug
    // show(req, res, next) {
    //     Course.findOne({ slug: req.params.slug })
    //         .then(course => {
    //             res.render("courses/show", course)
    //         }
                
    //         )
    //         .catch(next);
    // }

    async show(req, res, next) {
        try {
            const course = await Course.findOne({slug: req.params.slug});
            res.render('courses/show', course);
        } catch (error) {
            
        }
    }
}

module.exports = new CourseController();
