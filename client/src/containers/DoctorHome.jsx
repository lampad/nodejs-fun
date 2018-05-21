import React, { Component } from 'react';
import axios from 'axios';
import AutoSuggest from 'react-bootstrap-autosuggest';
import './DoctorHome.css'

import PatientList from '../components/PatientList';

function getFullName(item, index) {
    var fullName = [item.firstName, item.lastName].join(" ");
    return fullName;
}

export default class DoctorHome extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    patients: []
	}	
    }

    componentDidMount() {
	axios.get('/api/patients')
	    .then(res => {
		const patients = res.data;
		this.setState({ patients });
	    });
    }

    render() {
	console.log("patients" + this.state.patients)
	return(
<div className="container">
    <h2 className="welcome-message">Welcome back, Dr. {this.props.location.state.user.lastName}.</h2>
    <div className='patients'>
        { this.state.patients ?
        <div>
          <AutoSuggest datalist={ this.state.patients.map(getFullName) }
	  placeholder="Patient Name" />
          <PatientList patients={ this.state.patients } />
        </div>
        :
        <div>{'You don\'t have any patients.'}</div>
        }
    </div>
</div>
	)
    }
}
