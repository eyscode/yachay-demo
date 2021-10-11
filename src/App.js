import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import 'bootstrap/dist/css/bootstrap.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from "./Main";
import 'semantic-ui-css/semantic.min.css'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="">
          <Main/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}