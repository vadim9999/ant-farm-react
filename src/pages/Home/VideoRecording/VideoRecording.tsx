import React, { useContext, useState } from "react";
import { PauseOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import { startRecording, stopRecording } from "api/api";
import { GlobalContext } from "context/GlobalContextComponent";
import { useLocation } from "react-router";
import ButtonStopTimer from "./ButtonStopTimer/ButtonStopTimer";
import { FormValues } from "./VideoRecordingForm/types";
import VideoRecordingForm from "./VideoRecordingForm/VideoRecordingForm";

const VideoRecording = () => {
  const { dispatch, globalState } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onOpenModal = () => {
    console.log("click");

    setIsModalVisible(true);
  };

  const onSubmitModal = (values: FormValues) => {
    console.log("data", values);

    startRecording({
      userId: globalState.userId,
      resolution: values.quality,
      filename: values.filename,
    }).then(() => {
      dispatch({ isRecording: true });
    });
    setIsModalVisible(false);
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onStopRecording = () => {
    stopRecording({ userId: globalState.userId }).then(() => {
      dispatch({ isRecording: false });
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
          Почати запис
        </Button>
      )}

      <Modal
        title="Відеозапис"
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
