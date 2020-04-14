'use strict'

var express = require('express');
var PatientController = require('../controllers/patient');

var router = express.Router();

router.get('/patienthome', PatientController.patienthome);
router.post('/patientsave', PatientController.patientsave);
router.post('/save-patient', PatientController.savePatient);
router.get('/patient/:id', PatientController.getPatient);
router.get('/patient', PatientController.getAllPatients);
router.put('/patient-update/:id', PatientController.updatePatient);
router.delete('/patient/:id', PatientController.deletePatient);

module.exports = router;