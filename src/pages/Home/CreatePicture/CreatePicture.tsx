import { CameraOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Select } from "antd";
import { GlobalContext } from "context/GlobalContextComponent";
import React, { useContext, useState } from "react";
import CreatePictureForm from "./CreatePictureForm/CreatePictureForm";
import { FormValues } from "./CreatePictureForm/typesCreatePictureForm";

const { Option } = Select;

const CreatePicture = () => {
  const { globalState } = useContext(GlobalContext);
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
        disabled={!globalState.isStartedPreview}
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
