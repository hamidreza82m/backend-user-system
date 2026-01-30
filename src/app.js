// src/app.js
const express = require('express');

const app = express();

// middleware پایه
app.use(express.json());

// health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;