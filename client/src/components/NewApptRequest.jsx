import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateField } from 'react-date-picker';
import { Button } from 'react-bootstrap';
import { withStyles } from 'material-ui/styles';
import './NewApptRequest.css';

export default class NewApptRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateString: '', // eslint-disable-line react/no-unused-state
      dateMoment: {}, // eslint-disable-line react/no-unused-state
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <div>
          <h2>Request an Appointment</h2>
        </div>
        <form className={'form'}>
          <div className={'form-row'}>
            <div className={'date-label'}>Date</div>
            <DateField
              dateFormat="YYYY-MM-DD hh:mm a"
            />
          </div>
          <Button
            variant="raised"
            color="primary"
          >
            Submit Request
          </Button>
        </form>
      </div>
    );
  }
}


