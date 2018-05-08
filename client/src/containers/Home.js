import React, { Component } from "react";
import "./Home.css";
import Login from './Login';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Doctor Patient Portal</h1>
            <p>Welcome!</p>
	    <Login />
        </div>
      </div>
    );
  }
}
