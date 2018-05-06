import Routes from './Routes';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import "./App.css";

class App extends Component {
  render() {
    return (
	    <div className="App container">
	    <Routes />
	    </div>
    );
  }
}

export default App;
