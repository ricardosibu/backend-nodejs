'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = Schema({
    name: String,
    lastName: String,
    year: Number,
    patology: String
});

module.exports = mongoose.model('Patient', PatientSchema);