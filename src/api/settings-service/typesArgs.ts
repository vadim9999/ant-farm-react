import { VideoResolution } from "types";

export interface GetStreamSettings {
  userId: string;
}

export interface SaveStreamSettings {
  userId: string;
  youtube: string;
  key: string;
}

export interface SetSettingsFeeder {
  interval: string;
  userId: string;
}

export interface ShutdownRPI {
  userId: string;
}

export interface RebootRPI {
  userId: string;
}
