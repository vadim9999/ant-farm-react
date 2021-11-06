import { PauseOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import { startRecording, stopRecording } from "api/api";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { getUserId } from "utils/utils";
import { FormValues } from "./VideoRecordingForm/types";
import VideoRecordingForm from "./VideoRecordingForm/VideoRecordingForm";

const { Option } = Select;

interface Props {
  onStartRecording: (value: boolean) => void;
}

const VideoRecording = ({ onStartRecording }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const location = useLocation();
  const userId = getUserId(location.search);

  const onOpenModal = () => {
    console.log("click");

    setIsModalVisible(true);
  };

  const onSubmitModal = (values: FormValues) => {
    console.log("data", values);

    startRecording({
      userId,
      resolution: values.quality,
      filename: values.filename,
    }).then(() => {
      setIsModalVisible(false);
      setIsRecording(true);
      onStartRecording(true);
    });
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onStopRecording = () => {
    stopRecording({ userId }).finally(() => {
      setIsRecording(false);
    });
  };

  return (
    <div>
      {isRecording ? (
        <Button
          type="primary"
          danger
          icon={<PauseOutlined />}
          size="large"
          onClick={onStopRecording}
        >
          Зупинити запис
        </Button>
      ) : (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          onClick={onOpenModal}
          size="large"
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
