import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Appointments from './Appointments';
import PatientDetails from '../components/PatientDetails';
import Files from '../components/Files';
import './PatientHome.css'

export default class PatientHome extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    patient: {}
	}
    }

    componentDidMount() {
	axios.get('/patients/${this.props.location.state.user}')
	    .then(res => {
		const patient = res.data;
		this.setState({ patient });
	    })
    }

    render() {
	return (
<div className="container">
    <h2>Welcome back, ${this.state.patient.firstName} ${this.state.patient.lastName}.</h2>
    <div className="profile">
        <div>
            <h3>Your Profile</h3>
            <PatientDetails patient={this.state.patient} />
        </div>
        <div className="button-wrapper">
            <Button variant="raised" color="primary">
          <Link to="/request-appointment" className="button">Request Appointment</Link>
        </Button>
        </div>
    </div>
    <div>
        <h3>Upcoming Appointments</h3>
        <Appointments appointments={this.state.patient.appointments} type="approved" viewer="patient" />
        <h3>Pending Appointments</h3>
        <Appointments appointments={this.state.patient.appointments} type="pending" viewer="patient" />
        <h3>Past Appointments</h3>
        <Appointments appointments={this.state.patient.appointments} type="completed" viewer="patient" />
    </div>
    <div>
        <h3>Your Files</h3>
        <Files files={this.state.patient.files} />
    </div>
</div>
	)	
    }
}
