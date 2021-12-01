import React, { useEffect, useState } from "react";
import { PauseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Props } from "./typesButtonStopTimer";
import { useTranslation } from "react-i18next";

const ButtonStopTimer = ({ onStopRecording }: Props) => {
  const [state, setState] = useState<{
    startedTime: Dayjs;
    diffTimeInSeconds: number;
  }>({ startedTime: dayjs(), diffTimeInSeconds: 0 });
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.videoRecording",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setState({
        ...state,
        diffTimeInSeconds: dayjs().diff(state.startedTime, "seconds"),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = Math.floor(state.diffTimeInSeconds / 3600);
  const minutes =
    Math.floor(state.diffTimeInSeconds / 60) >= 60
      ? Math.floor(state.diffTimeInSeconds / 60) - hours * 60
      : Math.floor(state.diffTimeInSeconds / 60);

  const seconds = state.diffTimeInSeconds - minutes * 60;

  return (
    <Button
      type="primary"
      danger
      icon={<PauseOutlined />}
      size="large"
      onClick={onStopRecording}
    >
      {t("stopRecording")}
      {(hours < 10 ? "0" : "") + hours}:{(minutes < 10 ? "0" : "") + minutes}:
      {(seconds < 10 ? "0" : "") + seconds}
    </Button>
  );
};

export default ButtonStopTimer;
