import { Button, Col, Form, Row, Select } from "antd";
import React from "react";
import { VideoResolution } from "types";
import { Props } from "./typesStreamingForm";

export const StreamingForm = ({ onCancel, onSubmit }: Props) => {
  const [form] = Form.useForm();

  const locales = {
    quality: "Якість зображення",
  };

  return (
    <Form form={form} name="streamingForm" onFinish={onSubmit}>
      <Form.Item name="quality" label={locales.quality}>
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
              {/* TODO move to locales */}
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
