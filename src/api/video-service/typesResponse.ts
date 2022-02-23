export enum SensorDHTName {
  Sot = "sot",
  Outside = "outside",
  Arena = "arena",
}

interface SensorDHT {
  temp: number;
  hum: number;
}
export interface SensorsData {
  connectedId: number;
  sensors: Record<SensorDHTName, SensorDHT>;
  streaming: boolean;
  waterLevel: number;
}
