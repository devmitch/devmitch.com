const express = require('express');
const projectModels = require('../models/project');

let router = express.Router();

router.get('/projects', (req, res, next) => {
    projectModels.Project.find({}, (err, projects) => {
        if (err) {
            res.send(err);
        }
        console.log(projects);
        res.render('projects', { projects: projects });
    }) // can i sort these for newest first? or based on some priority field?
});

router.post('/projects/add_project', (req, res, next) => {
    // title, description, repo, stack
    // later add preview field for live preview of app (if applicable, haha pun)
    let project = new projectModels.Project(req.body);

    project.save((err, projectDoc) => {
        if (err) {
            let errMsg = "Error occured when trying to save the project!"
            if (err.code === 11000) {
                // duplicate key
                errMsg = "Project title already exists!"
            }
            return res.send(errMsg); // obviously change for error handling
        }

        res.redirect('/projects');
    })
});

module.exports = router;