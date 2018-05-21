import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PatientList.css'

const PatientList = ({ patients, history, classes }) => (
    <ul>
    {console.log("patients in patientlist" + patients)}
      <h3>Patients</h3>
    {patients.map((patient) => (
        <div
          key={patient.id}
          onClick={() => {
            history.push(`/patients/${patient.id}`);
          }}
          onKeyPress={() => {
            history.push(`/patients/${patient.id}`);
          }}
          className='patient-row'
        >
          <div className='patient-info'>
	    <li>{patient.firstName} {patient.lastName}</li>
	  </div>
        </div>))}
    </ul>
);

PatientList.propTypes = {
  patients: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.object.isRequired,
};

export default withRouter((PatientList));

