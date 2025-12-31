const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WS Server running on ws://localhost:${PORT}`);

const statusList = ['online', 'warning', 'offline'];

/**
 * STATE واقعی سرور (کپی دقیق مدل تو)
 */
let devices = [
  {
    id: "45ty",
    name: "dev1",
    type: "relay",
    temperature: 24.8,
    lastSeen: new Date(),
    location: { lat: 51.5074, lng: -0.1278 },
    status: "online"
  },
  {
    id: "m7n2",
    name: "AlphaNode42",
    type: "sensor",
    temperature: 36.1,
    lastSeen: new Date(),
    location: { lat: 35.6895, lng: 139.6917 },
    status: "online"
  },
  {
    id: "m7n2",
    name: "AlphaNode42",
    type: "sensor",
    temperature: 36.1,
    lastSeen: new Date(),
    location: { lat: 35.6895, lng: 139.6917 },
    status: "online"
  },
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
  }
  // ← بقیه deviceها را عیناً می‌توانی اضافه کنی
];

/**
 * اتصال کلاینت
 */
wss.on('connection', (ws) => {
  console.log('Client connected');

  // ارسال snapshot اولیه (معادل BehaviorSubject initial value)
  ws.send(JSON.stringify({
    type: 'DEVICES',
    payload: devices
  }));

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

/**
 * UPDATE LOOP (دقیقاً مثل setInterval تو)
 */
setInterval(() => {
  devices = devices.map(device => ({
    ...device,
    temperature: Math.floor(Math.random() * 200),
    status: statusList[Math.floor(Math.random() * statusList.length)],
    lastSeen: new Date()
  }));

  const message = JSON.stringify({
    type: 'DEVICES',
    payload: devices
  });

  // broadcast
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });

}, 5000);
