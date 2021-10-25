import { Button, Dropdown, Menu } from "antd";
import {
  BorderOutlined,
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
            <Button type="primary" icon={<PlayCircleOutlined />} size="large" />

            <Button
              type="primary"
              danger
              icon={<PauseOutlined />}
              size="large"
            />
          </div>
          <div>
            <Dropdown overlay={menu} trigger={["click"]} placement="topCenter">
              <Button type="primary" icon={<SettingOutlined />}  size="large"/>
            </Dropdown>
          </div>
          {/* <button
            id="start-preview"
            type="button"
            onClick="startPreview();"
            class="btn btn-outline-primary"
          >
            <i class="fas fa-play"></i>
          </button>
          <button
            id="stop-preview"
            type="button"
            onClick="stopPreview();"
            class="btn btn-outline-primary"
            disabled
          >
            <i class="fas fa-pause"></i>
          </button>
          <button
            id="stop-preview"
            style="float:right"
            type="button"
            onClick="onFullScreen();"
            class="btn btn-outline-primary"
          >
            <i class="fas fa-expand"></i>
          </button>
          <span id="info" tabindex="0" title="Якість відео">
            <div
              class="btn-group dropup"
              style="float:right; padding-right: 10px;"
            >
              <button
                id="videoResolution"
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-cog"></i>
              </button>
              <div class="dropdown-menu">
                <a onClick="onQ720()" id="Q720" class="cursorQ dropdown-item">
                  720 HD
                </a>
                <a
                  onClick="onQ480()"
                  id="Q480"
                  class="cursorQ dropdown-item active"
                >
                  480
                </a>
                <a onClick="onQ240()" id="Q240" class="cursorQ dropdown-item">
                  240
                </a>
              </div> */}
          {/* </div> */}
          {/* </span> */}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
