import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import DoctorHome from './containers/DoctorHome';
import PatientHome from './containers/PatientHome';
import Patient from './containers/DoctorPatient';
// import Navbar from './components/Navbar';
import NewApptRequest from './components/NewApptRequest';
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" component={DoctorHome} />
    <Route path="/account" component={PatientHome} />
    <Route path="/request-appointment" component={NewApptRequest} />
    <Route path="/patients/:id" component={Patient} />
  </Switch>;
