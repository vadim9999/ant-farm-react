import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route
          exact
          path="/"
          component={() => <Redirect to="/index.html?id=5" />}
        /> */}
        {/* <Route */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
