import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./Login.css";
import { login } from '../reducers/auth';


class Login extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    email: "",
	    password: ""
	};
    }

    validateForm() {
	return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
	this.setState({
	    [event.target.id]: event.target.value
	});
    }

    render() {
	const { attemptLogin, classes } = this.props
	return (
<div className="Login">
    <div className="lander">
        <h1>Doctor Patient Portal</h1>
        <p>Welcome!</p>
    </div>
    <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
        </FormGroup>
		<Button block bsSize="large" disabled={!this.validateForm()} type="submit" onClick={attemptLogin(this.state.email, this.state.password)}>
		Login
            </Button>
    </form>
</div> );
    }
}

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: (email, password) => {
    dispatch(login(email, password));
  },
});

Login.propTypes = {
  attemptLogin: PropTypes.func
};

export default connect(() => ({}), mapDispatchToProps)((Login));
