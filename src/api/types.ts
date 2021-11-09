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