import React, { useContext, useReducer } from "react";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import {
  FullscreenOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./index.scss";

import { API_URL, stopPreview, videoService } from "api/api";
import { VideoResolution } from "types";
import { GlobalContext } from "context/GlobalContextComponent";
import { State } from "./typesVideoPlayer";

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
  const [state, setState] = useReducer(
    (prevState: State, nextState: Partial<State>): State => ({
      ...prevState,
      ...nextState,
    }),
    {
      imageUrl: "",
      currentResolution: VideoResolution.Q480,
    }
  );

  const onStartPreview =
    ({ resolution }: { resolution: VideoResolution }) =>
    () => {
      videoService
        .startPreview({ userId: globalState.userId, resolution })
        .then(() => {
          const streamUrl = `${API_URL}/stream.mjpg?id=${globalState.userId}`;

          setState({
            imageUrl: streamUrl,
          });
          dispatch({ isStartedPreview: true });
        });
    };

  const onStopPreview = () => {
    return stopPreview({ userId: globalState.userId }).then(() => {
      setState({
        imageUrl: "",
      });
      dispatch({ isStartedPreview: false });
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
    setState({ currentResolution: e.key as VideoResolution });
  };

  const menu = (
    <Menu selectedKeys={[state.currentResolution]} onClick={onChangeQuality}>
      <Menu.Item key={VideoResolution.Q720}>720 HD</Menu.Item>
      <Menu.Item key={VideoResolution.Q480}>480</Menu.Item>
      <Menu.Item key={VideoResolution.Q240}>240</Menu.Item>
    </Menu>
  );

  return (
    <div className="videoPlayer">
      <div id="fullScreen">
        {state.imageUrl && (
          <img
            id="badge"
            src={state.imageUrl}
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
              onClick={onStartPreview({ resolution: state.currentResolution })}
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
