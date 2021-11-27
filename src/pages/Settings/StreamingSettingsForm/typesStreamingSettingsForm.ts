import { FormProps } from "antd";

export interface StreamingSettingsFormValues {
  youtubeLink: string;
  youtubeKey: string;
}

export interface Props {
  onSubmit: FormProps<StreamingSettingsFormValues>["onFinish"];
  initialValues?: StreamingSettingsFormValues;
}
