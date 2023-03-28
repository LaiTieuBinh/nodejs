const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLenght: 255, require: true },
        description: { type: String, maxLenght: 600 },
        image: { type: String, maxLenght: 255 },
        slug: { type: String, slug: 'name', unique:true },
        videoId: { type: String, maxLenght: 255, require: true },
        level: { type: String, maxLenght: 255 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
