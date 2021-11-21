import { FormProps } from "antd";

export interface FeedSettingsFormValues {
  interval: string;
}

export interface Props {
  onSubmit: FormProps<FeedSettingsFormValues>["onFinish"];
  initialValues: FeedSettingsFormValues;
}
