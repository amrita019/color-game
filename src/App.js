import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { history } from "./helpers/history.js";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { PageNotFound } from "./helpers/PageNotFound.js";

class App extends React.Component {
  render() {
    history.push("/login");
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/home" component={HomeScreen} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export { App };