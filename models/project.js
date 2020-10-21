const mongoose = require('mongoose');

module.exports.Project = mongoose.model("Project", new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    repo: {
        type: String,
        required: true //hmmm
    },
    stack: {
        type: String,
        required: true
    }
}));