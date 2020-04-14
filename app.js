'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//routes
var patient_routes = require('./routes/patient')

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors

//routes
app.use('/', patient_routes);


//export
module.exports = app;