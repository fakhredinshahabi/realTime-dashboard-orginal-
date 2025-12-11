export interface _device {

  id: string;
  name: string;
  type: "relay" | "sensor" | "meter";
  temperature: number;
  lastSeen: Date;
  location: _location;
  status: string;

}
export interface _location{
  lat: number,
  lng: number
}
