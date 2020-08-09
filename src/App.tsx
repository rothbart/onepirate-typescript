import React from "react";
import "./App.css";
import Home from "./onepirate/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Privacy from "./onepirate/Privacy";
import SignIn from "./onepirate/SignIn";
import SignUp from "./onepirate/SignUp";
import ForgotPassword from "./onepirate/ForgotPassword";
import Terms from "./onepirate/Terms";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
