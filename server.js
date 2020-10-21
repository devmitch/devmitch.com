const path = require('path');
const express = require('express');
const mainRoutes = require('./routes/main');
const port = 3000;

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views/pages'));
app.set("view engine", "ejs");

app.use(mainRoutes);

app.listen(port, () => {
	console.log("Server started!");
});
