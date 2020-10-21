const express = require('express');

let router = express.Router();

router.get('/projects', (req, res, next) => {
    res.render('projects');
});

module.exports = router;