import React from "react";
import { Button, Form, Input } from "antd";
import { Rule } from "rc-field-form/lib/interface";
import { Props } from "./typesStreamingSettingsForm";

const StreamingSettingsForm = ({ onSubmit, initialValues }: Props) => {
  const [form] = Form.useForm();

  const locales = {
    youtubeLink: "Посилання youtube",
    youtubeKey: "Ключ youtube",
    submit: "Зберегти",
  };

  const schema: Record<string, Rule> = {
    youtubeLink: { required: true, message: "Введіть посилання" },
    youtubeKey: { required: true, message: "Введіть ключ youtube" },
  };

  return (
    <Form
      layout="vertical"
      onFinish={onSubmit}
      form={form}
      initialValues={initialValues}
    >
      <Form.Item
        name="youtubeLink"
        rules={[schema.youtubeLink]}
        label={locales.youtubeLink}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item
        name="youtubeKey"
        label={locales.youtubeKey}
        rules={[schema.youtubeKey]}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {locales.submit}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StreamingSettingsForm;
