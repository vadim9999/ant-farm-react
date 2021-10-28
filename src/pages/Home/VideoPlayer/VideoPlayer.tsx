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

const VideoPlayer = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">720 HD</Menu.Item>
      <Menu.Item key="1">480</Menu.Item>
      <Menu.Item key="3">240</Menu.Item>
    </Menu>
  );

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
              // onClick="startPreview();"
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
              // onClick="onFullScreen();"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
