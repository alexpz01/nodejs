'use strict'

var moongose = require('mongoose');
var app = require('./app');
const PORT = 3700;

moongose.Promise = global.Promise;

moongose.connect("mongodb://localhost:27017/portafolio").then(res => {
    console.log("Conexion establecida con exito");

    //servercreation

    app.listen(PORT,() => {
        console.log("server init correct");
    })

}).catch((error) => {
    console.log(error);
});
