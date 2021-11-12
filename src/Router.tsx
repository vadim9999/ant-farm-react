import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "pages/Home/Home";
import Settings from "pages/Settings/Settings";
import { routes } from "routes";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.videoStreaming} component={Home} />
      <Route exact path={routes.settings} component={Settings} />

      {/* TODO add page not found */}
    </Switch>
  );
};

export default Router;
