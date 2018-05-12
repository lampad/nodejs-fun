import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DoctorHome from './containers/DoctorHome';
import PatientHome from './containers/PatientHome';
// import Patient from './containers/DoctorPatient';
// import Navbar from './components/Navbar';
import NewApptRequest from './components/NewApptRequest';
import Login from "./containers/Login";
    // <Route path="/patient/:id" component={Patient} />
    // <Route path="/account" component={PatientHome} />

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" component={DoctorHome} />
    <Route path="/request-appointment" component={NewApptRequest} />
  </Switch>;
