const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mainRoutes = require('./routes/main');
const projectRoutes = require('./routes/projects');
require("dotenv").config({ path: "variables.env" });
const port = 3000;

let app = express();

// database connection
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

// setup
app.use(bodyParser.urlencoded({
	extended: false // what is this for
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views/pages'));
app.set("view engine", "ejs");

// routes
app.use(mainRoutes); // includes index page and about page
app.use(projectRoutes); // project page and individual projects

// start
app.listen(port, () => {
	console.log("Server started!");
});
