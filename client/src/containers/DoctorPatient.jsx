import React, { Component } from 'react';
import axios from 'axios'
import Appointments from './Appointments';
import PatientDetails from '../components/PatientDetails';
import Files from '../components/Files';

function filterAppointments(appointments, type) {
    if (appointments == null || appointments === undefined) {
	console.log("appointments null or undefined")
	return [];
    }

    return appointments.filter(function(apt) { return apt.status == type });
}

export default class Patient extends Component {
    constructor(props) {
	super(props);

	this.state = { patient: {} }
    }

    componentDidMount() {
	console.log("current location: " + this.props.location.pathname)
	axios.get('/api' + this.props.location.pathname)
	    .then(res => {
		const patient = res.data
		this.setState({ patient });
	    });
    }

    render() {
	return (
<div className="container">
    <h2>{this.state.patient.firstName} {this.state.patient.lastName}</h2>
    <PatientDetails patient={this.state.patient} />
    <div>
        <h3>Appointment Requests</h3>
        <Appointments appointments={filterAppointments(this.state.patient.appointments,"pending")} />
    </div>
    <div>
        <h3>Upcoming Appointments</h3>
        <Appointments appointments={filterAppointments(this.state.patient.appointments,"approved")} />
    </div>
    <div>
        <h3>Past Appointments</h3>
        <Appointments appointments={filterAppointments(this.state.patient.appointments,"completed")} />
    </div>
    <div>
        <h3>Patient Files</h3>
        <Files files={this.state.patient.files} />
    </div>
</div>
	)
    }
}
