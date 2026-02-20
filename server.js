// Server to serve the portfolio
// Supports both HTTP (for Render/cloud platforms) and HTTPS (for local development)
// Render and other cloud platforms automatically handle HTTPS/TLS, so HTTP is sufficient

const fs = require("fs");
const http = require("http");
const https = require("https");
const path = require("path");
const express = require("express");

const app = express();

// Serve static files (index.html, CSS, JS, images, etc.) from the current directory.
app.use(express.static(path.join(__dirname)));

// Fallback: always serve index.html for root.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

// Check if TLS certificates exist for local HTTPS development
const TLS_KEY_PATH = path.join(__dirname, "cert", "privkey.pem");
const TLS_CERT_PATH = path.join(__dirname, "cert", "fullchain.pem");
const hasTLSCerts = fs.existsSync(TLS_KEY_PATH) && fs.existsSync(TLS_CERT_PATH);

// Use HTTPS if certificates exist (local dev), otherwise use HTTP (Render/cloud)
if (hasTLSCerts) {
  const credentials = {
    key: fs.readFileSync(TLS_KEY_PATH),
    cert: fs.readFileSync(TLS_CERT_PATH),
  };
  https.createServer(credentials, app).listen(PORT, () => {
    console.log(`✅ Serveur HTTPS lancé sur https://localhost:${PORT}`);
  });
} else {
  // HTTP mode - Render will add HTTPS automatically
  http.createServer(app).listen(PORT, () => {
    console.log(`✅ Serveur HTTP lancé sur le port ${PORT}`);
    console.log(`   (HTTPS géré automatiquement par Render en production)`);
  });
}

