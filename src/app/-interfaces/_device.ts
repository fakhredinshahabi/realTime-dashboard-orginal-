export interface _device {

  id: string;
  name: string;
  type: "relay" | "sensor" | "meter";
  temperature: number;
  lastSeen: Date;
  location: { lat: number, lng: number };
  status: "online" | "offline" | "warning";

}
