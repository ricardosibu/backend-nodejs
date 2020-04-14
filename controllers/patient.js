'use strict'
var Patient = require('../models/patient');
var controller = {

    patienthome: function(req, res) {
        return res.status(200).send({
            message: "Soy patient home"
        });
    },

    patientsave: function(req, res) {
        return res.status(200).send({
            message: "Soy patient save"
        });
    },

    savePatient: function(req, res) {
        var patient = new Patient();

        var params = req.body;
        patient.name = params.name;
        patient.lastName = params.lastName;
        patient.year = params.year;
        patient.patology = params.patology;

        patient.save((err, patientStored) => {
            if(err) return res.status(500).send({message: "Error al guardar"});
            if(!patientStored) return res.status(404).send({message: "Objeto no existe"})

            return res.status(200).send({patient: patientStored});
        });
    },

    getPatient: function(req, res) {
        var patientId = req.params.id;

        Patient.findById(patientId, (err, patient) => {
            if(err) return res.status(500).send({message: "Error al devolver datos"});
            if(!patient) return res.status(404).send({message: "EL paciente no existe"});

            return res.status(200).send({
                patient
            });
        });
    },

    getAllPatients: function(req, res) {
        Patient.find({}).exec((err, patient) => {
            if(err) return res.status(500).send({message: "Error al devolver datos"});
            if(!patient) return res.status(404).send({message: "EL paciente no existe"});

            return res.status(200).send({
                patient
            });
        })
    },

    updatePatient: function(req, res) {
        var patientId = req.params.id;
        var update = req.body;

        Patient.findByIdAndUpdate(patientId, update, (err, patientUpdated) => {
            if(err) return res.status(500).send({message: "Error al devolver datos"});
            if(!patientUpdated) return res.status(404).send({message: "EL paciente no existe"});

            return res.status(200).send({
                patient: patientUpdated
            });
        });
    },

    deletePatient: function(req, res) {
        var patientId = req.params.id;

        Patient.findByIdAndRemove(patientId, (err, patientRemoved) => {
            if(err) return res.status(500).send({message: "No se ha podido borrar el proyecto"});
            if(!patientRemoved) return res.status(404).send({message: "El paciente no existe"});

            return res.status(200).send({
                patient: patientRemoved
            });
        });
    }
};

module.exports = controller;