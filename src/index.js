


const express = require('express');
const { engine } = require ('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/src/public')));

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

// Routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
