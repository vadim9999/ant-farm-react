import React, { useContext, useState } from "react";
import { PauseOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { API_URL } from "api/api";
import videoService from "api/video-service/video.service";
import { GlobalContext } from "context/GlobalContextComponent";
import { useTranslation } from "react-i18next";
import { StreamingForm } from "./StreamingForm/StreamingForm";
import { FormValues } from "./StreamingForm/typesStreamingForm";

const StreamingControls = ({
  isDisableStartStreaming,
}: {
  isDisableStartStreaming: boolean;
}) => {
  const { globalState, dispatch } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.streamingControls",
  });

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitModal = async (formValues: FormValues) => {
    try {
      await videoService.startStream({
        userId: globalState.userId,
        resolution: formValues.quality,
      });

      await videoService.waitStartPreview({ userId: globalState.userId });

      // TODO fix this add resolution to the global state?
      await videoService.startPreview({
        userId: globalState.userId,
        resolution: globalState.currentResolution,
      });

      const streamUrl = `${API_URL}/stream.mjpg?id=${globalState.userId}`;

      dispatch({
        isStartedPreview: true,
        isStreaming: true,
        imageUrl: streamUrl,
      });
    } finally {
      setIsModalVisible(false);
    }
  };

  const onOpenModal = () => {
    setIsModalVisible(true);
  };

  const onStopStream = () => {
    videoService.stopStream({ userId: globalState.userId });
    dispatch({ isStartedPreview: false, isStreaming: false, imageUrl: "" });

    // videoService.startStream({userId, resolution})
  };

  return (
    <>
      {globalState.isStreaming ? (
        <Button
          type="primary"
          danger
          icon={<PauseOutlined />}
          size="large"
          onClick={onStopStream}
        >
          {t("stopStreaming")}
        </Button>
      ) : (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          disabled={globalState.isStartedPreview || isDisableStartStreaming}
          size="large"
          onClick={onOpenModal}
        >
          {t("startStreaming")}
        </Button>
      )}

      <Modal
        title={t("startStreaming")}
        centered
        visible={isModalVisible}
        footer={null}
        onCancel={onCloseModal}
        destroyOnClose
      >
        <StreamingForm onSubmit={onSubmitModal} onCancel={onCloseModal} />
      </Modal>
    </>
  );
};

export default StreamingControls;
