// backend/server.js
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Test API route
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Express + AWS Amplify!" });
});

module.exports.handler = serverless(app); // Lambda compatibility
