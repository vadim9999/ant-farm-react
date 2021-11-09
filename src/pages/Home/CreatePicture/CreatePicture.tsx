import { CameraOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import CreatePictureForm from "./CreatePictureForm/CreatePictureForm";
import { FormValues } from "./CreatePictureForm/typesCreatePictureForm";

const { Option } = Select;

const CreatePicture = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const locales = {
    createImage: "Створити зображення",
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitModal = (values: FormValues) => {
    console.log("values", values);

    setIsModalVisible(false);
  };

  const onOpenModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<CameraOutlined />}
        onClick={onOpenModal}
        size="large"
      >
        {locales.createImage}
      </Button>

      <Modal
        title={locales.createImage}
        centered
        visible={isModalVisible}
        footer={null}
        onCancel={onCloseModal}
        destroyOnClose
      >
        <CreatePictureForm onSubmit={onSubmitModal} onCancel={onCloseModal} />
      </Modal>
    </div>
  );
};

export default CreatePicture;
