import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import VideoStreaming from "pages/VideoStreaming/VideoStreaming";
import Settings from "pages/Settings/Settings";
import MediaFiles from "./pages/MediaFiles/MediaFiles";
import { routes } from "routes";
import Dashboard from "pages/Dashboard/Dashboard";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.dashboard} component={Dashboard} />
      <Route exact path={routes.videoStreaming} component={VideoStreaming} />
      <Route exact path={routes.mediaFiles} component={MediaFiles} />
      <Route exact path={routes.settings} component={Settings} />

      {/* TODO add page not found */}
    </Switch>
  );
};

export default Router;
