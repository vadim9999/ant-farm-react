import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import VideoStreaming from "pages/VideoStreaming/VideoStreaming";
import Settings from "pages/Settings/Settings";
import MediaFiles from "./pages/MediaFiles/MediaFiles";
import Dashboard from "pages/Dashboard/Dashboard";
import AppLayout from "AppLayout/AppLayout";
import { Button, Result } from "antd";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="video-streaming" element={<VideoStreaming />} />
        <Route path="media-files" element={<MediaFiles />} />
        <Route path="settings" element={<Settings />} />
        <Route index element={<Dashboard />} />
      </Route>
      <Route
        path="*"
        element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
              <Link to="/">
                <Button type="primary">Back Home</Button>
              </Link>
            }
          />
        }
      />
    </Routes>
  );
};

export default Router;
