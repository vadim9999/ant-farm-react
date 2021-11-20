export interface GetStreamSettingsResponse {
  key: string;
  youtube: string;
}

export enum SensorDHTName {
  Sot = "sot",
  Outside = "outside",
  Arena = "arena",
}

export interface SensorDHT {
  temp: number;
  hum: number;
}
export interface SensorsData {
  connectedId: number;
  sensors: Record<SensorDHTName, SensorDHT>;
  streaming: boolean;
  waterLevel: number;
}
