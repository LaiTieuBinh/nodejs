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

    // [Get] /courses/show
    async show(req, res, next) {
        const course = await Course.findOne({slug: req.params.slug});
        try {
            res.render('courses/show', course);
        } catch (error) {
            
        }
    }

    // [Get] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {})
    }

    // [GET] /courses/edit
    async edit (req, res, next) {
        const course = await Course.findById(req.params.id)
        try {
            res.render('courses/edit', {course:mongooseToObject(course)})
        } catch (error) {
            
        }  
    }

    // [PUT] /courses/:id
    async update (req, res, next) {
        // Course.updateOne({_id:req.params.id}, req.body)
        //     .then(res.redirect('/me/stored-courses'))
        //     .catch(next)

        await Course.updateOne({_id:req.params.id}, req.body)
         try {
            res.redirect('/me/stored/courses');
         } catch (error) {
            
         }   
        
    }
}

module.exports = new CourseController();
