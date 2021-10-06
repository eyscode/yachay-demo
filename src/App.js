import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import 'bootstrap/dist/css/bootstrap.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from "./Main";

export default function App() {
  return (
    <Router basename="/yachay-demo">
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