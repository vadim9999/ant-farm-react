import React from "react";
import { Route, Routes } from "react-router-dom";
import VideoStreaming from "pages/VideoStreaming/VideoStreaming";
import Settings from "pages/Settings/Settings";
import MediaFiles from "./pages/MediaFiles/MediaFiles";
import { routes } from "routes";
import Dashboard from "pages/Dashboard/Dashboard";

const Router = () => {
  return (
    <Routes>
      <Route path={routes.dashboard} element={<Dashboard />} />
      <Route path={routes.videoStreaming} element={<VideoStreaming />} />
      <Route path={routes.mediaFiles} element={<MediaFiles />} />
      <Route path={routes.settings} element={<Settings />} />

      {/* TODO add page not found */}
    </Routes>
  );
};

export default Router;
