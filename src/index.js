const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const route = require("./routes");
// const db = require('./config/db');
const { connect } = require("./config/db");
const methodOverride = require('method-override');
//middleware
const SortMiddleware = require('./app/middlewares/SortMiddleware');

// connect to database
// db.connect();
connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Middleware post method
// Form
app.use(express.urlencoded({ extended: true }));
// XML, axios, fetch, ajax, ...
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// override method
app.use(methodOverride('_method'));

// custom middleware
app.use(SortMiddleware);

// Template engine
app.engine(
    "hbs",
    engine({ 
        extname: ".hbs", 
        helpers: { 
            sum: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending'
                }

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}">
                <span class="${icon}"></span>
              </a>`
            }
        } 
    })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// Routes
route(app);



app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
