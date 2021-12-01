import React, { useEffect } from "react";
import { Button, Form, Select } from "antd";
import { Props } from "./typesFeedSettingsForm";
import { useTranslation } from "react-i18next";

const FeedSettingsForm = ({ onSubmit, initialValues }: Props) => {
  const [form] = Form.useForm();
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.feedSettingsForm",
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
      <Form.Item name="interval" label={t("interval")}>
        <Select style={{ width: 120 }}>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          {t("submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FeedSettingsForm;
