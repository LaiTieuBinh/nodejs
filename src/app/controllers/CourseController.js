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
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render("courses/show", course);
        } catch (error) {}
    }

    // [Get] /courses/create
    create(req, res, next) {
        res.render("courses/create");
    }

    // [POST] /courses/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        const course = new Course(formData);
        // course.save()
        //     .then(() => res.redirect("/"))
        //     .catch((err) => {});
        try {
            await course.save();
            res.redirect("/");
        } catch (error) {
            
        }
    }

    // [GET] /courses/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            res.render("courses/edit", { course: mongooseToObject(course) });
        } catch (error) {}
    }

    // [PUT] /courses/:id
    async update(req, res, next) {
        // Course.updateOne({_id:req.params.id}, req.body)
        //     .then(res.redirect('/me/stored-courses'))
        //     .catch(next)

        try {
            await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect("/me/stored/courses");
        } catch (error) {}
    }

    // [Delete] /courses/:id
    async destroy(req, res, next) {
        // Course.deleteOne({_id:req.params.id})
        //     .then(() => res.redirect('back'))
        //     .catch(next);

        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect("back");
        } catch (error) {}
    }
}

module.exports = new CourseController();
