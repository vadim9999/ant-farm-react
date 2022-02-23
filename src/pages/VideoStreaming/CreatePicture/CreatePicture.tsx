import React, { useContext, useState } from "react";
import { CameraOutlined } from "@ant-design/icons";
import { Button, Modal, notification } from "antd";
import { GlobalContext } from "context/GlobalContextComponent";
import CreatePictureForm from "./CreatePictureForm/CreatePictureForm";
import { FormValues } from "./CreatePictureForm/typesCreatePictureForm";
import videoService from "api/video-service/video.service";
import { useTranslation } from "react-i18next";

const CreatePicture = () => {
  const { globalState } = useContext(GlobalContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.takePicture",
  });

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const onSubmitModal = (values: FormValues) => {
    videoService
      .takePicture({
        resolution: values.quality,
        filename: values.filename,
        userId: globalState.userId,
      })
      .then(() => {
        notification.success({
          message: t("notifications.createdSuccessfully", {
            fileName: values.filename,
          }),
        });
      });

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
        disabled={!globalState.isStartedPreview || globalState.isStreaming}
      >
        {t("takePicture")}
      </Button>

      <Modal
        title={t("takePicture")}
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
