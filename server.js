// Simple HTTPS server to serve the portfolio over TLS in local/dev environments.
// NOTE:
// 1) This is for local development or a custom VPS. On platforms like Vercel, Netlify or GitHub Pages,
//    HTTPS/TLS is automatically managed for you and you don't need this file.
// 2) You must generate your own TLS certificate and key (self-signed for dev, or CA-signed for production).

const fs = require("fs");
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

// TLS configuration
// Put your key and certificate in a "cert" folder at the project root:
//   ./cert/privkey.pem
//   ./cert/fullchain.pem
//
// For local development, you can generate a self-signed certificate with OpenSSL:
//   openssl req -x509 -newkey rsa:4096 -nodes -keyout privkey.pem -out fullchain.pem -days 365
// Then move both files into the "cert" directory.

const TLS_KEY_PATH = path.join(__dirname, "cert", "privkey.pem");
const TLS_CERT_PATH = path.join(__dirname, "cert", "fullchain.pem");

if (!fs.existsSync(TLS_KEY_PATH) || !fs.existsSync(TLS_CERT_PATH)) {
  console.error(
    "[TLS ERROR] Les fichiers de certificat n'ont pas été trouvés dans le dossier ./cert.",
  );
  console.error(
    "Créez ./cert/privkey.pem et ./cert/fullchain.pem avant de lancer ce serveur.",
  );
  process.exit(1);
}

const credentials = {
  key: fs.readFileSync(TLS_KEY_PATH),
  cert: fs.readFileSync(TLS_CERT_PATH),
};

const PORT = process.env.PORT || 4433;

https.createServer(credentials, app).listen(PORT, () => {
  console.log(`✅ Serveur HTTPS lancé sur https://localhost:${PORT}`);
});

