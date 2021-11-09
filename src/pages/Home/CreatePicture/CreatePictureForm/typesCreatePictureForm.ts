import { ButtonProps, FormProps } from "antd";
import { VideoResolution } from "types";

export interface FormValues {
  filename: string;
  quality: VideoResolution;
}

export interface Props {
  onSubmit: FormProps<FormValues>["onFinish"];
  onCancel: ButtonProps["onClick"];
}
