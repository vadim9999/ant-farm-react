import { Button, Dropdown, Menu } from "antd";
import {
  BorderOutlined,
  FullscreenOutlined,
  PauseCircleOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.scss";

import { postStartPreview } from "api/api";
import { useLocation, useParams, useRouteMatch } from "react-router";
import { getUserId } from "utils/utils";

const VideoPlayer = () => {
  const location = useLocation();
  const match = useLocation();
  console.log("location", getUserId(location.search));

  const menu = (
    <Menu>
      <Menu.Item key="0">720 HD</Menu.Item>
      <Menu.Item key="1">480</Menu.Item>
      <Menu.Item key="3">240</Menu.Item>
    </Menu>
  );

  const onFullScreen = () => {
    var fullScreen = document.getElementById("fullScreen");

    // @ts-ignoreignore
    fullScreen?.webkitRequestFullScreen();
    // @ts-ignoreignore
    if (document?.webkitFullscreenElement) {
      // @ts-ignoreignore
      document.webkitCancelFullScreen();
      var image = document.getElementById("badge");
      image?.setAttribute("width", "640");
      image?.setAttribute("height", "480");
    } else {
      // @ts-ignoreignore
      fullScreen?.webkitRequestFullScreen();
      const image = document.getElementById("badge");
      image?.setAttribute("width", "100%");
      image?.setAttribute("height", "100%");
    }
  };

  const onStartPreview = () => {
    postStartPreview({ userId: getUserId(location.search) });
  };

  return (
    <div className="videoPlayer">
      <div id="fullScreen">
        <img id="badge" width="640" height="480" alt="Video" />
        <div className="controls">
          <div>
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              size="large"
              onClick={onStartPreview}
            />

            <Button
              type="primary"
              danger
              icon={<PauseOutlined />}
              size="large"
              disabled
              // onClick="stopPreview();"
            />
          </div>
          <div>
            <Dropdown overlay={menu} trigger={["click"]} placement="topCenter">
              <Button type="primary" icon={<SettingOutlined />} size="large" />
            </Dropdown>
            <Button
              type="primary"
              icon={<FullscreenOutlined />}
              size="large"
              onClick={onFullScreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
