import { Router } from 'express';
import Api from '../../db/api';
import db from '../../db/db';
import { MODELS, ROLES } from '../../db/constants';

function getPatients() {
    return db.get(MODELS.PERSON)
	.filter({ role: ROLES.PATIENT })
	.value().map(patient => {
	    patient["appointments"] = getAppointmentsForPatient(patient.id);
	    patient["files"] = getFilesForPatient(patient.id);
	    return patient;
	});
}

function getPatientById(patientId) {
    return {
	...db.get(MODELS.PERSON)
	    .filter({ role: ROLES.PATIENT })
	    .find({ id: patientId })
	    .value(),
	appointments: getAppointmentsForPatient(patientId),
	files: getFilesForPatient(patientId)
    }
}

function getAppointmentsForPatient(id) {
    return db.get(MODELS.APPOINTMENT)
	.filter({ patientId : id })
	.value();
}

function getFilesForPatient(id) {
    return db.get(MODELS.FILE)
	.filter({ patientId : id })
	.value();
}

export default Router()
    .get('/', (req, res) => {
	res
	    .status(200)
	    .send(getPatients());
    })

    .get('/:id', (req, res) => {
	res
	    .status(200)
	    .send(getPatientById(req.params.id));
    });

