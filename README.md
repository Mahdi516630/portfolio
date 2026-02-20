# Portfolio – Mahdi Yacoub Ali

Portfolio moderne, responsive et sécurisé présenté en français, basé sur **HTML** + **Tailwind CSS (CDN)**.  
Il met en avant vos compétences en cybersécurité, data science, développement web/mobile, cloud et IA.

## 📁 Structure

- `index.html` – Page principale du portfolio (design avancé, responsive, dark mode).
- `server.js` – Exemple de serveur **HTTPS (TLS)** avec Node.js + Express pour servir le portfolio en local de manière sécurisée.
- `cert/` – Dossier à créer pour stocker vos certificats TLS (`privkey.pem` et `fullchain.pem`).

## 🚀 Utilisation simple (sans serveur)

Pour un usage basique (par exemple, envoi par e-mail ou ouverture locale) :

1. Ouvrez simplement `index.html` dans votre navigateur (double clic).
2. Le site est entièrement fonctionnel, responsive, avec design moderne et mode sombre.

## 🌐 Lancer avec un serveur HTTPS (TLS) en local

> Prérequis : [Node.js](https://nodejs.org/) installé sur votre machine.

1. Ouvrez un terminal dans le dossier du projet.
2. Installez les dépendances :

   ```bash
   npm install express
   ```

3. Créez un dossier `cert` à la racine du projet :

   ```bash
   mkdir cert
   ```

4. Générez un certificat auto-signé (pour le développement uniquement) avec **OpenSSL** :

   ```bash
   openssl req -x509 -newkey rsa:4096 -nodes -keyout privkey.pem -out fullchain.pem -days 365
   ```

   Puis déplacez les fichiers générés dans le dossier `cert` :

   ```bash
   move privkey.pem cert\
   move fullchain.pem cert\
   ```

5. Lancez le serveur HTTPS :

   ```bash
   node server.js
   ```

6. Ouvrez le navigateur sur :

   ```text
   https://localhost:4433
   ```

> ⚠️ Comme le certificat est auto-signé, le navigateur affichera un avertissement.  
> Pour la production, utilisez un certificat émis par une autorité de certification (ex. Let’s Encrypt).

## ☁️ Déploiement avec HTTPS automatique

Pour un déploiement public avec TLS géré automatiquement (HTTPS), vous pouvez :

- Héberger `index.html` sur :
  - GitHub Pages
  - Netlify
  - Vercel
  - OVH, Hostinger, etc. (hébergement mutualisé)
- Dans ces cas, la plateforme fournit généralement un certificat HTTPS gratuit (souvent via Let’s Encrypt).

## ✏️ Personnalisation

- Modifiez le contenu de `index.html` (sections : À propos, Compétences, Projets, Formation, Contact) pour l’adapter à vos futurs projets.
- Ajoutez vos liens (GitHub, LinkedIn, etc.) dans la section contact si vous le souhaitez.

