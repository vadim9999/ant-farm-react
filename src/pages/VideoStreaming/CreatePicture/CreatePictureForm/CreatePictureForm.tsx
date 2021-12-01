import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { VideoResolution } from "types";
import { Props } from "./typesCreatePictureForm";
import { useTranslation } from "react-i18next";

const CreatePictureForm = ({ onCancel, onSubmit }: Props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.takePicture.takePictureForm",
  });

  const initialValuesForm = { quality: VideoResolution.Q480 };

  const schema = {
    filename: { required: true, message: t("schema.inputFileName") },
  };

  return (
    <Form
      form={form}
      name="createPictureForm"
      initialValues={initialValuesForm}
      onFinish={onSubmit}
    >
      <Form.Item
        name="filename"
        label={t("filename")}
        rules={[schema.filename]}
      >
        <Input style={{ width: 400 }} />
      </Form.Item>
      <Form.Item name="quality" label={t("quality")}>
        <Select style={{ width: 120 }}>
          <Select.Option value={VideoResolution.Q720}>1280x720</Select.Option>
          <Select.Option value={VideoResolution.Q480}>854x480</Select.Option>
          <Select.Option value={VideoResolution.Q240}>426x240</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Row justify="space-between">
          <Col xs={11}>
            <Button type="default" onClick={onCancel} block>
              {t("cancel")}
            </Button>
          </Col>
          <Col xs={11}>
            <Button type="primary" htmlType="submit" block>
              {t("submit")}
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default CreatePictureForm;
