import { FormProps } from "antd";
import { GetStreamSettingsResponse } from "api/typesApiResponse";

export interface StreamingSettingsFormValues {
  youtubeLink: string;
  youtubeKey: string;
}

export interface Props {
  onSubmit: FormProps<StreamingSettingsFormValues>["onFinish"];
  initialValues?: StreamingSettingsFormValues;
}
