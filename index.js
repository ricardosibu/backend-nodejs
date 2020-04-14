'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/demo')
    .then(() => {
        console.log("Conexion establecida con exito");

        app.listen(port, () => {
            console.log("Servidor corriendo exitosamente en el puerto 3700");
        });
    })
    .catch(err => console.log(err));