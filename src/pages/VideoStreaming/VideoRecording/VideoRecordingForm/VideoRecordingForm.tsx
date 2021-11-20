import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { VideoResolution } from "types";
import { Props } from "./types";

const { Option } = Select;

const VideoRecordingForm = ({ onSubmit, onCancel }: Props) => {
  const [form] = Form.useForm();

  const schema = {
    fileName: { required: true, message: "Введіть назву відеофайлу" },
  };

  return (
    <Form
      form={form}
      name="videoRecordingForm"
      onFinish={onSubmit}
      initialValues={{ quality: VideoResolution.Q480 }}
    >
      <Form.Item label="File name" name="filename" rules={[schema.fileName]}>
        <Input placeholder="Ім'я відеофайлу" style={{ width: 400 }} />
      </Form.Item>
      <Form.Item label="Quality" name="quality">
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
              Cancel
            </Button>
          </Col>
          <Col xs={11}>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default VideoRecordingForm;
