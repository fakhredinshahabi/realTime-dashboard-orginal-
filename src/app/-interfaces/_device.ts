export interface _devices {
  success: boolean;
  devices: _device[];
}
export interface _device {
  id: string;
  name: string;
  power: number;
  temperature: number;
  // type: 'relay' | 'sensor' | 'meter';
  // lastSeen: Date;
  // location: _location;
  status: string;
}
export interface _location {
  lat: number;
  lng: number;
}
export interface _getDeviceMessage {
  type: string;
  token: string | null;
}
