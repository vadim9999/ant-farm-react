import {
  PauseOutlined,
  PlayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Modal, Select } from "antd";
import { API_URL, videoService } from "api/api";
import { GlobalContext } from "context/GlobalContextComponent";
import React, { useContext, useState } from "react";
import { StreamingForm } from "./StreamingForm/StreamingForm";
import { FormValues } from "./StreamingForm/typesStreamingForm";

const { Option } = Select;

const StreamingControls = ({
  isDisableStartStreaming,
}: {
  isDisableStartStreaming: boolean;
}) => {
  const { globalState, dispatch } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const locales = {
    startStreaming: "Почати трансляцію",
  };

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
          Зупинити трансляцію
        </Button>
      ) : (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          disabled={globalState.isStartedPreview || isDisableStartStreaming}
          size="large"
          onClick={onOpenModal}
        >
          {locales.startStreaming}
        </Button>
      )}

      <Modal
        title={locales.startStreaming}
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
