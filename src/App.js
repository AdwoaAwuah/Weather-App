import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Weather from "./components/Weather";




export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={Weather} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
