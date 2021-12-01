import React, { useContext, useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Modal, notification } from "antd";
import { GlobalContext } from "context/GlobalContextComponent";
import ButtonStopTimer from "./ButtonStopTimer/ButtonStopTimer";
import { FormValues } from "./VideoRecordingForm/types";
import VideoRecordingForm from "./VideoRecordingForm/VideoRecordingForm";
import videoService from "api/video-service/video.service";
import { useTranslation } from "react-i18next";

const VideoRecording = () => {
  const { dispatch, globalState } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.videoRecording",
  });

  const onOpenModal = () => {
    setIsModalVisible(true);
  };

  const onSubmitModal = (values: FormValues) => {
    videoService
      .startRecording({
        userId: globalState.userId,
        resolution: values.quality,
        filename: values.filename,
      })
      .then(() => {
        dispatch({ isRecording: true });
        notification.success({
          message: t("notifications.recordStartedSuccessfully"),
        });
      });
    setIsModalVisible(false);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onStopRecording = () => {
    videoService.stopRecording({ userId: globalState.userId }).then(() => {
      dispatch({ isRecording: false });
      notification.success({
        message: t("notifications.recordCreatedSuccessfully"),
      });
    });
  };

  // TODO move text of buttons into object
  // TODO add timer in button
  return (
    <div>
      {globalState.isRecording ? (
        <ButtonStopTimer onStopRecording={onStopRecording} />
      ) : (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          onClick={onOpenModal}
          size="large"
          disabled={!globalState.isStartedPreview || globalState.isStreaming}
        >
          {t("startRecording")}
        </Button>
      )}

      <Modal
        title={t("videoRecord")}
        centered
        visible={isModalVisible}
        footer={null}
        onCancel={onCloseModal}
        destroyOnClose
      >
        <VideoRecordingForm onSubmit={onSubmitModal} onCancel={onCloseModal} />
      </Modal>
    </div>
  );
};

export default VideoRecording;
