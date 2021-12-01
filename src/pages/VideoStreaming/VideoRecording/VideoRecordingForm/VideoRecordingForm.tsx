import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { VideoResolution } from "types";
import { Props } from "./types";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const VideoRecordingForm = ({ onSubmit, onCancel }: Props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation("translation", {
    keyPrefix: "videoStreaming.videoRecording.videoRecordingForm",
  });

  const schema = {
    fileName: { required: true, message: t("schema.inputFileName") },
  };

  return (
    <Form
      form={form}
      name="videoRecordingForm"
      onFinish={onSubmit}
      initialValues={{ quality: VideoResolution.Q480 }}
    >
      <Form.Item
        label={t("fileName")}
        name="filename"
        rules={[schema.fileName]}
      >
        <Input placeholder={t("fileName")} style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label={t("quality")} name="quality">
        <Select style={{ width: 120 }}>
          <Option value={VideoResolution.Q720}>740</Option>
          <Option value={VideoResolution.Q480}>480</Option>
          <Option value={VideoResolution.Q240}>240</Option>
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

export default VideoRecordingForm;
