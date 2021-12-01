import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Rule } from "rc-field-form/lib/interface";
import { Props } from "./typesStreamingSettingsForm";
import { useTranslation } from "react-i18next";

const schema: Record<string, Rule> = {
  youtubeLink: { required: true, message: "Введіть посилання" },
  youtubeKey: { required: true, message: "Введіть ключ youtube" },
};

const locales = {
  youtubeLink: "Посилання youtube",
  youtubeKey: "Ключ youtube",
  submit: "Зберегти",
};

const StreamingSettingsForm = ({ onSubmit, initialValues }: Props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.streamingSettingsForm",
  });

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
      <Form.Item
        name="youtubeLink"
        rules={[schema.youtubeLink]}
        label={t("youtubeLink")}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item
        name="youtubeKey"
        label={t("youtubeKey")}
        rules={[schema.youtubeKey]}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {t("submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StreamingSettingsForm;
