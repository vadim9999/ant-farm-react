import { useContext } from "react";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import {
  FullscreenOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./index.scss";

import { API_URL } from "api/api";
import { VideoResolution } from "types";
import { GlobalContext } from "context/GlobalContextComponent";
import videoService from "api/video-service/video.service";

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

const VideoPlayer = () => {
  const { globalState, dispatch } = useContext(GlobalContext);

  const onStartPreview =
    ({ resolution }: { resolution: VideoResolution }) =>
    () => {
      videoService
        .startPreview({ userId: globalState.userId, resolution })
        .then(() => {
          const streamUrl = `${API_URL}/stream.mjpg?id=${globalState.userId}`;

          dispatch({ isStartedPreview: true, imageUrl: streamUrl });
        });
    };

  const onStopPreview = () => {
    return videoService.stopPreview({ userId: globalState.userId }).then(() => {
      dispatch({ isStartedPreview: false, imageUrl: "" });
    });
  };

  const onChangeQuality: MenuProps["onClick"] = (e) => {
    if (globalState.isStartedPreview) {
      onStopPreview().then(() => {
        setTimeout(function () {
          onStartPreview({ resolution: e.key as VideoResolution })();
        }, 1000);
      });
    }
    dispatch({ currentResolution: e.key as VideoResolution });
  };

  const menu = (
    <Menu
      selectedKeys={[globalState.currentResolution]}
      onClick={onChangeQuality}
    >
      <Menu.Item key={VideoResolution.Q720}>720 HD</Menu.Item>
      <Menu.Item key={VideoResolution.Q480}>480</Menu.Item>
      <Menu.Item key={VideoResolution.Q240}>240</Menu.Item>
    </Menu>
  );

  return (
    <div className="videoPlayer">
      <div id="fullScreen">
        {globalState.imageUrl && (
          <img
            id="badge"
            src={globalState.imageUrl}
            width="640"
            height="480"
            alt="Video"
          />
        )}
        <div className="controls">
          <div>
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              size="large"
              onClick={onStartPreview({
                resolution: globalState.currentResolution,
              })}
              disabled={globalState.isStartedPreview || globalState.isRecording}
            />

            <Button
              type="primary"
              danger
              icon={<PauseOutlined />}
              size="large"
              onClick={onStopPreview}
              disabled={
                !globalState.isStartedPreview || globalState.isRecording
              }
            />
          </div>
          <div>
            <Dropdown
              overlay={menu}
              disabled={globalState.isRecording}
              trigger={["click"]}
              placement="topCenter"
              getPopupContainer={(triggerNode) => triggerNode}
            >
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
