import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/index.html">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
