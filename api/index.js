// Serverless function for Vercel (optional - only if you need Express server)
// Vercel can serve static files directly, so this is only needed for advanced use cases

const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/../'));

// Fallback: always serve index.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/../index.html');
});

module.exports = app;
