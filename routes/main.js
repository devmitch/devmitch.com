const express = require('express');

let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
})

module.exports = router;