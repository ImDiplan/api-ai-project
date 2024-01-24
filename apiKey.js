const express = require('express');

const apiKey = '123456789'; // replace 'YOUR_API_KEY' with your actual API key

const apiKeyMiddleware = express.Router();

apiKeyMiddleware.use((req, res, next) => {
  const requestApiKey = req.headers['x-api-key'];
  if (requestApiKey && requestApiKey === apiKey) {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden. Invalid API Key.' });
  }
});

module.exports = apiKeyMiddleware;
