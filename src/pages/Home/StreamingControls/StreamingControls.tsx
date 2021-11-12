import {
  PauseOutlined,
  PlayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Modal, Select } from "antd";
import { GlobalContext } from "context/GlobalContextComponent";
import React, { useContext, useState } from "react";
import { StreamingForm } from "./StreamingForm/StreamingForm";

const { Option } = Select;

const StreamingControls = () => {
  const { globalState } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const locales = {
    startStreaming: "Почати трансляцію",
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      {globalState.isStreaming ? (
        <Button
          type="primary"
          danger
          icon={<PauseOutlined />}
          size="large"
          disabled
        >
          Зупинити трансляцію
        </Button>
      ) : (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          disabled={!globalState.isStartedPreview}
          size="large"
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
    </div>
  );
};

export default StreamingControls;
