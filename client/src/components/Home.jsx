import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../containers/Login';

const Home = ({ user }) => (
  <Route
    path="/"
    render={() => {
	console.log("hello");
	console.log(user);
      if (user && user.role === 'doctor') {
          return <Redirect to={{
	      pathname: "/dashboard",
	      state: {user: this.state.user}
	  }}/>;
      } else if (user && user.role === 'patient') {
          return <Redirect to={{
	      pathname: "/account",
	      state: {user: this.state.user}
	  }}/>;
      }
      return <Login />;
    }}
  />
);

const mapStateToProps = ({ user }) => ({ user });

Home.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(Home);
