import { VideoResolution } from "types";

export interface StartPreview {
  userId: string;
  resolution: VideoResolution;
}

export interface StopPreview {
  userId: string;
}

export interface StartRecording {
  userId: string;
  resolution: VideoResolution;
  filename: string;
}

export interface StopRecording {
  userId: string;
}

export interface TakePicture {
  resolution: VideoResolution;
  filename: string;
  userId: string;
}

export interface GetStreamSettings {
  userId: string;
}

export interface SaveStreamSettings {
  userId: string;
  youtube: string;
  key: string;
}
