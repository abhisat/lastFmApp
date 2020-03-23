import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./routes";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {Routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
};

export { App };
