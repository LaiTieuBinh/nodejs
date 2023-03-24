import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';


const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');


app.get("/profile", (req, res) => {
    res.render("profile");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
