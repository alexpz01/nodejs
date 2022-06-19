var Project = require("../models/project")

var controller = {
    home : function(req, res) {
        return res.status(200).send({
            message : "Home"
        })
    },

    test : function(req, res) {
        return res.status(200).send({
            message : "test"
        })
    },

    saveProject : function(req, res) {
        var project = new Project();
        return res.status(200).send({
            message : typeof Project,
            messaje_two : project
        })
    }
}

module.exports = controller;