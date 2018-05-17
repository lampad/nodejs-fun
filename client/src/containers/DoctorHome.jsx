import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Card from 'material-ui/Card';
import './DoctorHome.css'

import PatientList from '../components/PatientList';

import { patients } from '../dummyData';

export default class DoctorHome extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    patients: []
	}	
    }
}

const DoctorHome = ({ classes }) => (
  <div className="container">
    <h2 className={classes.welcomeMessage}>Welcome back, Dr. McGonagall.</h2>
    <div className={classes.patients}>
      { patients ?
        <div>
          <Card className={classes.searchWrapper}>
            <Icon className={classes.searchIcon}>search</Icon>
            <TextField
              name="search"
              placeholder="Search patients"
              className={classes.search}
              inputProps={{ style: { fontSize: 12 } }}
            />
          </Card>
          <PatientList patients={patients} />
        </div>
          : <div>{'You don\'t have any patients.'}</div>
        }
    </div>
  </div>
);

DoctorHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DoctorHome);
