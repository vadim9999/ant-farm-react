import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "context/GlobalContextComponent";
import CreatePicture from "./CreatePicture/CreatePicture";
import StreamingControls from "./StreamingControls/StreamingControls";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoRecording from "./VideoRecording/VideoRecording";
import { Card, Col, Popover, Row, Space } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { routes } from "routes";
import FeedNow from "./FeedNow/FeedNow";
import settingsService from "api/settings-service/settings.service";
import { useTranslation } from "react-i18next";

const VideoStreaming = () => {
  const { globalState } = useContext(GlobalContext);
  const [hasStreamSettings, setHasStreamSettings] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming",
  });

  useEffect(() => {
    settingsService
      .getStreamSettings({ userId: globalState.userId })
      .then((data) => {
        if (data.key && data.youtube) {
          setHasStreamSettings(true);
        }
      });
  }, []);

  return (
    <Row>
      <Col>
        <VideoPlayer />
      </Col>
      <Col style={{ marginLeft: 15, marginTop: 15 }}>
        <Card>
          <Space direction="vertical">
            <Space>
              <StreamingControls isDisableStartStreaming={!hasStreamSettings} />
              {!hasStreamSettings ? (
                <Popover
                  trigger="hover"
                  content={
                    <div>
                      {t("popup.noSettings")}
                      <Link to={routes.settings}>{t("popup.settings")}</Link>
                    </div>
                  }
                >
                  <InfoCircleOutlined />
                </Popover>
              ) : undefined}
            </Space>
            <VideoRecording />
            <CreatePicture />
            <FeedNow />
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default VideoStreaming;
