import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import { Button, Panel, FormControl } from 'react-bootstrap';
import './Appointment.css'

export default class Appointment extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    open: false,
	    message: '',
	};
	this.toggleOpen = this.toggleOpen.bind(this);
	this.onMessageChange = this.onMessageChange.bind(this);
    }

    onMessageChange(evt) {
	this.setState({ message: evt.target.value });
    }

    toggleOpen() {
	this.setState({open : !this.state.open });
    }

    render() {
	const { appt, classes } = this.props;
	return (
	    <Panel id={appt.datetime} className='card' expanded={this.state.open} onToggle={appt.status === 'pending' ? this.toggleOpen : () =>{}}>
	      <Panel.Heading>
		<Panel.Title toggle> {appt.datetime}
		</Panel.Title>
	      </Panel.Heading>
	      <Panel.Collapse>
		<Panel.Body>
		  <div className='content'>
		    Purpose: {appt.purpose}
		    { appt.status === 'pending' ?
			<div>
                              <div className='header'>Message to Patient</div>
				  <form>
					<div className='margin-bottom'>
					      <FormControl type="text" name="message" onChange={this.onMessageChange} value={this.state.message} inputProps={{ style: { fontSize: 11 } }} multiline fullWidth />
					    </div>
					    <div>
						  <Button onClick={this.handleSubmit} variant="raised" color="primary" className='action'>
							Decline Request
						      </Button>
						</div>
				      </form>
			</div> : null }
		  </div>
		</Panel.Body>
	      </Panel.Collapse>
	    </Panel>
	);
    }
}
