// server.js - سرور کامل با احراز هویت
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// ========== تنظیمات ==========
const SECRET_KEY = 'my-secret-key-12345';
const PORT = 3000;

// ========== Middleware ==========
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:5173'],
  credentials: true
}));

// ========== ذخیره‌سازی موقت ==========
let users = [];
let devices = [
  { id: 1, name: 'هیتر اتاق خواب', status: 'online', temperature: 24, power: 120 },
  { id: 2, name: 'لامپ پذیرایی', status: 'online', temperature: 18, power: 60 },
  { id: 3, name: 'کولر آشپزخانه', status: 'offline', temperature: 0, power: 0 },
];

// ========== Validation ==========
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 8;
};

const validateUserName = (userName) => {
  const re = /^[a-zA-Z0-9_]{3,20}$/;
  return re.test(userName);
};

// ========== API Routes ==========

// 🔍 چک تکراری (Async Validator)
app.get('/api/users/check', (req, res) => {
  try {
    const { email, userName } = req.query;

    if (!email && !userName) {
      return res.status(400).json({ 
        success: false, 
        message: 'پارامتر الزامی است' 
      });
    }

    let exists = false;

    if (email) {
      exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    } else if (userName) {
      exists = users.some(u => u.userName.toLowerCase() === userName.toLowerCase());
    }

    res.json({ 
      success: true,
      exists
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'خطا در بررسی' 
    });
  }
});

// 📝 ثبت‌نام
app.post('/api/register', async (req, res) => {
  try {
    const { name, lastName, userName, email, password } = req.body;

    // بررسی خالی بودن
    if (!name || !lastName || !userName || !email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'تمام فیلدها الزامی هستند' 
      });
    }

    // بررسی فرمت userName
    if (!validateUserName(userName)) {
      return res.status(400).json({ 
        success: false, 
        message: 'نام کاربری نامعتبر است' 
      });
    }

    // بررسی فرمت email
    if (!validateEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'ایمیل نامعتبر است' 
      });
    }

    // بررسی طول password
    if (!validatePassword(password)) {
      return res.status(400).json({ 
        success: false, 
        message: 'رمز عبور باید حداقل 8 کاراکتر باشد' 
      });
    }

    // چک تکراری
    const existingUser = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() || 
           u.userName.toLowerCase() === userName.toLowerCase()
    );

    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        message: 'ایمیل یا نام کاربری تکراری است'
      });
    }

    // هش کردن رمز
    const hashedPassword = await bcrypt.hash(password, 10);

    // ذخیره کاربر
    const newUser = {
      id: users.length + 1,
      name: name.trim(),
      lastName: lastName.trim(),
      userName: userName.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    console.log('✅ کاربر جدید:', userName);

    res.status(201).json({ 
      success: true, 
      message: 'ثبت‌نام موفق',
      user: {
        id: newUser.id,
        name: newUser.name,
        lastName: newUser.lastName,
        userName: newUser.userName,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error('خطا:', error);
    res.status(500).json({ 
      success: false, 
      message: 'خطا در ثبت‌نام' 
    });
  }
});

// 🔑 ورود
app.post('/api/login', async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'نام کاربری و رمز الزامی است' 
      });
    }

    // پیدا کردن کاربر
    const user = users.find(u => u.userName.toLowerCase() === userName.toLowerCase());

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'نام کاربری یا رمز اشتباه است' 
      });
    }

    // بررسی رمز
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'نام کاربری یا رمز اشتباه است' 
      });
    }

    // ساخت Token
    const token = jwt.sign(
      { 
        id: user.id, 
        userName: user.userName,
        email: user.email 
      },
      SECRET_KEY,
      { expiresIn: '24h' }
    );

    console.log('✅ ورود موفق:', userName);

    res.json({ 
      success: true, 
      message: 'ورود موفق',
      token,
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email
      }
    });

  } catch (error) {
    console.error('خطا:', error);
    res.status(500).json({ 
      success: false, 
      message: 'خطا در ورود' 
    });
  }
});

// 👤 پروفایل (با Token)
app.get('/api/profile', (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'توکن یافت نشد' 
      });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ 
          success: false, 
          message: 'توکن نامعتبر' 
        });
      }

      const user = users.find(u => u.id === decoded.id);
      
      if (!user) {
        return res.status(404).json({ 
          success: false, 
          message: 'کاربر یافت نشد' 
        });
      }

      res.json({
        success: true,
        user: {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email
        }
      });
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'خطا' 
    });
  }
});

// ========== WebSocket ==========
const authenticatedClients = new Map();

wss.on('connection', (ws) => {
  console.log('🔌 اتصال WebSocket');

  ws.send(JSON.stringify({ 
    type: 'CONNECTED', 
    message: 'متصل شدید' 
  }));

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === 'AUTH') {
        jwt.verify(data.token, SECRET_KEY, (err, user) => {
          if (err) {
            ws.send(JSON.stringify({ 
              type: 'ERROR', 
              message: 'احراز هویت ناموفق' 
            }));
            ws.close();
          } else {
            authenticatedClients.set(ws, user.id);
            
            ws.send(JSON.stringify({ 
              type: 'AUTH_SUCCESS', 
              message: 'احراز هویت موفق'
            }));

            ws.send(JSON.stringify({ 
              type: 'DEVICES', 
              payload: devices 
            }));

            console.log(`✅ ${user.userName} وارد WebSocket شد`);
          }
        });
      }

      if (data.type === 'CONTROL_DEVICE') {
        if (!authenticatedClients.has(ws)) {
          return;
        }

        const device = devices.find(d => d.id === data.deviceId);
        if (device && data.action === 'toggle') {
          device.status = device.status === 'online' ? 'offline' : 'online';
          broadcastDevices();
        }
      }

    } catch (error) {
      console.error('خطا:', error);
    }
  });

  ws.on('close', () => {
    authenticatedClients.delete(ws);
    console.log('❌ قطع اتصال WebSocket');
  });
});

function broadcastDevices() {
  const message = JSON.stringify({ type: 'DEVICES', payload: devices });
  
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && authenticatedClients.has(client)) {
      client.send(message);
    }
  });
}

// به‌روزرسانی دستگاه‌ها
setInterval(() => {
  devices.forEach(device => {
    if (device.status === 'online') {
      device.temperature = Math.floor(Math.random() * 15 + 15);
      device.power = Math.floor(Math.random() * 150 + 50);
    } else {
      device.temperature = 0;
      device.power = 0;
    }
  });

  broadcastDevices();
}, 5000);

// ========== راه‌اندازی ==========
server.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  🚀 سرور روشن شد!                     ║
║                                        ║
║  📍 آدرس: http://localhost:${PORT}      ║
║  🔌 WebSocket: ws://localhost:${PORT}   ║
║                                        ║
║  ✅ آماده دریافت درخواست               ║
╚════════════════════════════════════════╝
  `);
});