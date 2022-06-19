
var express = require("express");
var bp = require("body-parser");
var app = express();
var projectRoutes = require("./routes/project")

//routes

app.get("/", (req, res) => {
    res.status(200).send(req.query.name)
})

//middlewares

app.use("/api", projectRoutes);

//CORS


//export

module.exports = app;