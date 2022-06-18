
var express = require("express");
var bp = require("body-parser");

var app = express();

//routes

app.get("/", (req, res) => {
    res.status(200).send(req.query.name)
})

//middlewares

/*app.use(bp.urlencoded({extended: false}))
app.use(bp.json())*/

//CORS


//export

module.exports = app;