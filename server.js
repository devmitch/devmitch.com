const express = require('express');

const port = 3000;
const hostname = 'localhost';

let app = express();

app.get('*', (req, res) => {
	res.send("hello there");
});

app.listen(port, () => {
	console.log("Server started!");
});
