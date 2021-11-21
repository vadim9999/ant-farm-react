import React, { useEffect } from "react";
import { Button, Form, Select } from "antd";
import { Props } from "./typesFeedSettingsForm";

const FeedSettingsForm = ({ onSubmit, initialValues }: Props) => {
  const [form] = Form.useForm();

  const locales = {
    interval: "Інтервал (днях)",
    submit: "Зберегти",
  };

  useEffect(() => {
    form.resetFields();
  }, [initialValues]);

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      form={form}
      initialValues={initialValues}
    >
      <Form.Item name="interval" label={locales.interval}>
        <Select style={{ width: 120 }}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {locales.submit}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FeedSettingsForm;
