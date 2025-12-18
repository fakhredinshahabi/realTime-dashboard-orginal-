import {Injectable} from '@angular/core';
import {_device} from '../-interfaces/_device';
import {BehaviorSubject,Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  devices: _device[] = [
    {
      id: "45ty",
      name: "dev1",
      type: "relay",
      temperature: 24.8,
      lastSeen: new Date("2025-12-09T14:32:00Z"),
      location: {lat: 51.5074, lng: -0.1278},
      status: "online"
    },
    {
      id: "m7n2",
      name: "AlphaNode42",
      type: "sensor",
      temperature: 36.1,
      lastSeen: new Date("2025-12-09T14:25:00Z"),
      location: {lat: 35.6895, lng: 139.6917},
      status: "online"
    },
    {
      id: "k9p4",
      name: "NovaHub13",
      type: "meter",
      temperature: 41.5,
      lastSeen: new Date("2025-12-09T14:01:00Z"),
      location: {lat: -33.8688, lng: 151.2093},
      status: "offline"
    },
    {
      id: "x3q8",
      name: "UltraFlow7",
      type: "relay",
      temperature: 28.3,
      lastSeen: new Date("2025-12-09T14:28:00Z"),
      location: {lat: 52.5200, lng: 13.4050},
      status: "online"
    },
    {
      id: "r5t1",
      name: "EcoPulse99",
      type: "sensor",
      temperature: 33.7,
      lastSeen: new Date("2025-12-09T14:11:00Z"),
      location: {lat: 25.2048, lng: 55.2708},
      status: "warning"
    },
    {
      id: "z8w3",
      name: "SmartGrid5",
      type: "relay",
      temperature: 47.2,
      lastSeen: new Date("2025-12-09T13:51:00Z"),
      location: {lat: 48.8566, lng: 2.3522},
      status: "offline"
    },
    {
      id: "b4m6",
      name: "PowerLink28",
      type: "meter",
      temperature: 25.9,
      lastSeen: new Date("2025-12-09T14:30:00Z"),
      location: {lat: 19.0760, lng: 72.8777},
      status: "online"
    },
    {
      id: "n7k2",
      name: "FlexCore88",
      type: "relay",
      temperature: 38.0,
      lastSeen: new Date("2025-12-09T14:06:00Z"),
      location: {lat: 37.5665, lng: 126.9780},
      status: "online"
    },
    {
      id: "v1x9",
      name: "QuantumSwitch3",
      type: "sensor",
      temperature: 44.6,
      lastSeen: new Date("2025-12-09T13:39:00Z"),
      location: {lat: 30.0444, lng: 31.2357},
      status: "offline"
    },
    {
      id: "c3z5",
      name: "HyperNode74",
      type: "meter",
      temperature: 30.2,
      lastSeen: new Date("2025-12-09T14:26:00Z"),
      location: {lat: 43.6532, lng: -79.3832},
      status: "online"
    },
    {
      id: "j8l3",
      name: "SolarHub16",
      type: "relay",
      temperature: 35.8,
      lastSeen: new Date("2025-12-09T14:19:00Z"),
      location: {lat: 55.7558, lng: 37.6173},
      status: "online"
    },
    {
      id: "t6r7",
      name: "NetFlow45",
      type: "sensor",
      temperature: 40.1,
      lastSeen: new Date("2025-12-09T13:45:00Z"),
      location: {lat: 13.7563, lng: 100.5018},
      status: "offline"
    },
    {
      id: "s2m9",
      name: "MiniPulse33",
      type: "relay",
      temperature: 27.4,
      lastSeen: new Date("2025-12-09T14:31:00Z"),
      location: {lat: 41.0082, lng: 28.9784},
      status: "online"
    },
    {
      id: "d5n1",
      name: "PrimeGrid82",
      type: "meter",
      temperature: 39.9,
      lastSeen: new Date("2025-12-09T14:08:00Z"),
      location: {lat: -1.2921, lng: 36.8219},
      status: "warning"
    },
    {
      id: "f9x4",
      name: "MaxNode67",
      type: "relay",
      temperature: 43.3,
      lastSeen: new Date("2025-12-09T13:31:00Z"),
      location: {lat: 24.7136, lng: 46.6753},
      status: "offline"
    },
    {
      id: "h3k8",
      name: "TechHub21",
      type: "sensor",
      temperature: 31.6,
      lastSeen: new Date("2025-12-09T14:33:00Z"),
      location: {lat: 52.3676, lng: 4.9041},
      status: "online"
    },
    {
      id: "w7p5",
      name: "EdgeLink90",
      type: "relay",
      temperature: 37.0,
      lastSeen: new Date("2025-12-09T14:11:00Z"),
      location: {lat: 19.4326, lng: -99.1332},
      status: "warning"
    },
    {
      id: "q2v6",
      name: "SparkCore14",
      type: "meter",
      temperature: 46.7,
      lastSeen: new Date("2025-12-09T13:25:00Z"),
      location: {lat: 24.8607, lng: 67.0011},
      status: "offline"
    },
    {
      id: "a8n3",
      name: "WaveNode55",
      type: "sensor",
      temperature: 26.5,
      lastSeen: new Date("2025-12-09T14:34:00Z"),
      location: {lat: -23.5505, lng: -46.6333},
      status: "online"
    },
    {
      id: "l4t9",
      name: "SyncHub36",
      type: "relay",
      temperature: 34.2,
      lastSeen: new Date("2025-12-09T14:22:00Z"),
      location: {lat: 6.5244, lng: 3.3792},
      status: "online"
    },
    {
      id: "u6m2",
      name: "ProFlow77",
      type: "meter",
      temperature: 42.8,
      lastSeen: new Date("2025-12-09T13:41:00Z"),
      location: {lat: 22.3193, lng: 114.1694},
      status: "warning"
    },
    {
      id: "e1k7",
      name: "CoreSwitch12",
      type: "relay",
      temperature: 29.1,
      lastSeen: new Date("2025-12-09T14:29:00Z"),
      location: {lat: 1.3521, lng: 103.8198},
      status: "online"
    },
    {
      id: "g3x5",
      name: "NodePulse63",
      type: "sensor",
      temperature: 35.4,
      lastSeen: new Date("2025-12-09T14:20:00Z"),
      location: {lat: 48.2082, lng: 16.3738},
      status: "online"
    },
    {
      id: "y7n8",
      name: "GridHub41",
      type: "relay",
      temperature: 48.9,
      lastSeen: new Date("2025-12-09T13:19:00Z"),
      location: {lat: -26.2041, lng: 28.0473},
      status: "offline"
    },
    {
      id: "c9m4",
      name: "LinkNode29",
      type: "meter",
      temperature: 32.7,
      lastSeen: new Date("2025-12-09T14:17:00Z"),
      location: {lat: 47.3769, lng: 8.5417},
      status: "online"
    },
    {
      id: "p6t2",
      name: "FlowCore85",
      type: "sensor",
      temperature: 40.3,
      lastSeen: new Date("2025-12-09T13:33:00Z"),
      location: {lat: 59.9139, lng: 10.7522},
      status: "offline"
    },
    {
      id: "k1z9",
      name: "HubPulse70",
      type: "relay",
      temperature: 24.0,
      lastSeen: new Date("2025-12-09T14:26:00Z"),
      location: {lat: 59.3293, lng: 18.0686},
      status: "warning"
    },
    {
      id: "v5n3",
      name: "SwitchNode58",
      type: "meter",
      temperature: 36.9,
      lastSeen: new Date("2025-12-09T14:18:00Z"),
      location: {lat: 60.1699, lng: 24.9384},
      status: "online"
    },
    {
      id: "r8x7",
      name: "NodeGrid39",
      type: "relay",
      temperature: 44.1,
      lastSeen: new Date("2025-12-09T13:15:00Z"),
      location: {lat: 52.2297, lng: 21.0122},
      status: "offline"
    },
    {
      id: "m2p4",
      name: "CoreHub11",
      type: "sensor",
      temperature: 28.8,
      lastSeen: new Date("2025-12-09T14:28:00Z"),
      location: {lat: 50.0755, lng: 14.4378},
      status: "online"
    },
    {
      id: "n9k6",
      name: "PulseNode66",
      type: "relay",
      temperature: 33.5,
      lastSeen: new Date("2025-12-09T14:21:00Z"),
      location: {lat: 37.9838, lng: 23.7275},
      status: "warning"
    },
    {
      id: "x1t8",
      name: "HubFlow23",
      type: "meter",
      temperature: 37.6,
      lastSeen: new Date("2025-12-09T14:15:00Z"),
      location: {lat: 38.7223, lng: -9.1393},
      status: "online"
    },
    {
      id: "z4m7",
      name: "NodeCore84",
      type: "sensor",
      temperature: 41.9,
      lastSeen: new Date("2025-12-09T13:27:00Z"),
      location: {lat: 50.8503, lng: 4.3517},
      status: "offline"
    },
    {
      id: "j3p9",
      name: "FlowGrid50",
      type: "relay",
      temperature: 26.2,
      lastSeen: new Date("2025-12-09T14:30:00Z"),
      location: {lat: 53.3498, lng: -6.2603},
      status: "online"
    },
    {
      id: "q7n2",
      name: "GridNode71",
      type: "meter",
      temperature: 30.8,
      lastSeen: new Date("2025-12-09T14:23:00Z"),
      location: {lat: 55.6761, lng: 12.5683},
      status: "warning"
    },
    {
      id: "t4x6",
      name: "CorePulse35",
      type: "relay",
      temperature: 45.3,
      lastSeen: new Date("2025-12-09T13:10:00Z"),
      location: {lat: 55.9533, lng: -3.1883},
      status: "offline"
    },
    {
      id: "s8k3",
      name: "PulseHub93",
      type: "sensor",
      temperature: 39.0,
      lastSeen: new Date("2025-12-09T14:00:00Z"),
      location: {lat: 49.2827, lng: -123.1207},
      status: "online"
    },
    {
      id: "d2n5",
      name: "HubNode27",
      type: "relay",
      temperature: 27.1,
      lastSeen: new Date("2025-12-09T14:31:00Z"),
      location: {lat: -36.8485, lng: 174.7633},
      status: "online"
    },
    {
      id: "f6p8",
      name: "NodeFlow60",
      type: "meter",
      temperature: 34.7,
      lastSeen: new Date("2025-12-09T14:06:00Z"),
      location: {lat: 64.1466, lng: -21.9426},
      status: "offline"
    },
    {
      id: "h9t1",
      name: "FlowPulse48",
      type: "sensor",
      temperature: 42.4,
      lastSeen: new Date("2025-12-09T13:34:00Z"),
      location: {lat: 34.6937, lng: 135.5022},
      status: "warning"
    },
    {
      id: "w3n7",
      name: "PulseGrid19",
      type: "relay",
      temperature: 29.5,
      lastSeen: new Date("2025-12-09T14:33:00Z"),
      location: {lat: 3.1390, lng: 101.6869},
      status: "online"
    },
    {
      id: "a5x2",
      name: "GridCore76",
      type: "meter",
      temperature: 38.2,
      lastSeen: new Date("2025-12-09T14:19:00Z"),
      location: {lat: 14.5995, lng: 120.9842},
      status: "online"
    },
    {
      id: "l8p6",
      name: "CoreNode32",
      type: "relay",
      temperature: 46.0,
      lastSeen: new Date("2025-12-09T13:16:00Z"),
      location: {lat: -34.6037, lng: -58.3816},
      status: "offline"
    },
    {
      id: "u2k4",
      name: "NodePulse89",
      type: "sensor",
      temperature: 31.3,
      lastSeen: new Date("2025-12-09T14:27:00Z"),
      location: {lat: 23.1136, lng: -82.3666},
      status: "warning"
    },
    {
      id: "e7n9",
      name: "PulseHub53",
      type: "meter",
      temperature: 35.6,
      lastSeen: new Date("2025-12-09T14:22:00Z"),
      location: {lat: 33.8938, lng: 35.5018},
      status: "online"
    },
    {
      id: "g1x3",
      name: "HubCore40",
      type: "relay",
      temperature: 43.8,
      lastSeen: new Date("2025-12-09T13:21:00Z"),
      location: {lat: 35.6892, lng: 51.3890},
      status: "offline"
    },
    {
      id: "y4t5",
      name: "CoreFlow78",
      type: "sensor",
      temperature: 25.4,
      lastSeen: new Date("2025-12-09T14:34:00Z"),
      location: {lat: -6.2088, lng: 106.8456},
      status: "online"
    },
    {
      id: "c8n1",
      name: "FlowNode64",
      type: "meter",
      temperature: 37.9,
      lastSeen: new Date("2025-12-09T14:17:00Z"),
      location: {lat: 40.4168, lng: -3.7038},
      status: "warning"
    },
    {
      id: "p2k7",
      name: "NodeGrid25",
      type: "relay",
      temperature: 40.7,
      lastSeen: new Date("2025-12-09T13:46:00Z"),
      location: {lat: 41.9028, lng: 12.4964},
      status: "offline"
    },
    {
      id: "k5x9",
      name: "GridHub38",
      type: "sensor",
      temperature: 33.0,
      lastSeen: new Date("2025-12-09T14:24:00Z"),
      location: {lat: -12.0464, lng: -77.0428},
      status: "online"
    }
  ];
  bsDevices$ =new BehaviorSubject<_device[]>(this.devices);

  devices$=this.bsDevices$.asObservable()
  status= ["online", "warning", "offline"];
  sendListDevices(){

    setInterval(()=>{
      this.bsDevices$.next(this.devices.map((device) => ({
        id: device.id,
        name: device.name,
        type: device.type,
        temperature: device.temperature = Math.floor(Math.random() * 200),
        lastSeen: new Date("2025-12-09T14:24:00Z"),
        location: {lat: device.location.lat, lng: device.location.lng},
        status: device.status = this.status[Math.floor(Math.random() * this.status.length)]
      })))

    },5000)
  }
}
