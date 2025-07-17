const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const BOT_TOKEN = '8048227682:AAFn3P-SDO_60fuaX2nHVJC41Rm41HHTlbE';
const CHAT_ID = '5850221453';

app.post('/', async (req, res) => {
  let alertMessage = "";
  if (typeof req.body === "string") {
    alertMessage = req.body;
  } else if (typeof req.body.message === "string") {
    alertMessage = req.body.message;
  } else {
    alertMessage = JSON.stringify(req.body);
  }
  await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: alertMessage,
    parse_mode: "Markdown"
  });
  res.send('OK');
});

app.listen(process.env.PORT || 3000);

