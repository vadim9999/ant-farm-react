import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/index.html" component={Home} />
        <Route
          exact
          path="/"
          component={() => <Redirect to="/index.html?id=5" />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
