const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const BOT_TOKEN = '8048227682:AAFn3P-SDO_60fuaX2nHVJC41Rm41HHTlbE';
const CHAT_ID = '5850221453';

app.post('/', async (req, res) => {
  const alertMessage = req.body.message || JSON.stringify(req.body);
  await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: alertMessage,
    parse_mode: "Markdown"
  });
  res.send('OK');
});

app.listen(process.env.PORT || 3000);

- **Add a `package.json` file:**

{
  "name": "tv-telegram-webhook",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2",
    "axios": "^1.6.8"
  }
}
