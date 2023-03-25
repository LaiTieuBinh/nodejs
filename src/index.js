import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import * as path from 'path';


const app = express();
const port = 3000;

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/src/public/')));

// Middleware post method
// Form
app.use(express.urlencoded({extended: true}));
// XML, axios, fetch, ajax, ...
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');


app.get("/profile", (req, res) => {
    res.render("profile");
});

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/search", (req, res) => {
    res.render("search");
});

app.post("/search", (req, res) => {
    // res.render("search");
    console.log(req.body);
    res.send()
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
