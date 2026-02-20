# Portfolio – Mahdi Yacoub Ali

Portfolio moderne, responsive et sécurisé présenté en français, basé sur **HTML** + **Tailwind CSS (CDN)**.  
Il met en avant vos compétences en cybersécurité, data science, développement web/mobile, cloud et IA.

## 📁 Structure

- `index.html` – Page principale du portfolio (design avancé, responsive, dark mode).
- `server.js` – Serveur Node.js + Express pour servir le portfolio en local (HTTPS avec certificats ou HTTP).
- `vercel.json` – Configuration pour le déploiement sur Vercel (site statique avec headers de sécurité).
- `render.yaml` – Configuration pour le déploiement sur Render (optionnel).
- `cert/` – Dossier à créer pour stocker vos certificats TLS (`privkey.pem` et `fullchain.pem`) - développement local uniquement.

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

## ☁️ Déploiement sur Vercel (Recommandé)

Vercel est optimisé pour les sites statiques et offre un déploiement ultra-rapide avec HTTPS/TLS automatique. C'est la solution la plus simple et performante pour ce portfolio.

### Option 1 : Déploiement via CLI Vercel (Rapide)

1. **Installez Vercel CLI** :
   ```bash
   npm install -g vercel
   ```

2. **Connectez-vous à Vercel** :
   ```bash
   vercel login
   ```

3. **Déployez votre projet** :
   ```bash
   vercel
   ```
   
   Suivez les instructions à l'écran. Vercel détectera automatiquement la configuration.

4. **Pour la production** :
   ```bash
   vercel --prod
   ```

### Option 2 : Déploiement via GitHub (Recommandé pour CI/CD)

1. **Poussez votre code sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Portfolio ready for Vercel"
   git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
   git push -u origin main
   ```

2. **Connectez votre repo sur Vercel** :
   - Allez sur [vercel.com](https://vercel.com) et créez un compte (gratuit)
   - Cliquez sur "Add New..." → "Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement le fichier `vercel.json`
   - Cliquez sur "Deploy"

3. **Configuration automatique** :
   - **Framework Preset** : Other (détecté automatiquement)
   - **Build Command** : Aucun nécessaire (site statique)
   - **Output Directory** : `/` (racine)
   - **Install Command** : Aucun nécessaire

4. **HTTPS automatique** :
   - Vercel fournit automatiquement un certificat SSL/TLS gratuit
   - Votre site sera accessible via `https://votre-projet.vercel.app`
   - Vous pouvez ajouter un domaine personnalisé gratuitement

### Avantages de Vercel

- ✅ **Déploiement ultra-rapide** (quelques secondes)
- ✅ **HTTPS/TLS automatique** avec certificat SSL gratuit
- ✅ **CDN global** pour des performances optimales
- ✅ **Déploiements automatiques** à chaque push sur GitHub
- ✅ **Prévisualisations** pour chaque Pull Request
- ✅ **Plan gratuit généreux** pour les projets personnels
- ✅ **Headers de sécurité** configurés dans `vercel.json`
- ✅ **Domaine personnalisé** gratuit

### Configuration Vercel

Le fichier `vercel.json` configure :
- ✅ Service des fichiers statiques
- ✅ Redirection vers `index.html` pour toutes les routes
- ✅ Headers de sécurité (XSS Protection, Frame Options, etc.)

## ☁️ Déploiement sur Render (Alternative)

Render gère automatiquement HTTPS/TLS pour votre application. Voici comment déployer :

### Option 1 : Déploiement automatique depuis GitHub

1. **Poussez votre code sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio"
   git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
   git push -u origin main
   ```

2. **Connectez votre repo sur Render** :
   - Allez sur [render.com](https://render.com) et créez un compte
   - Cliquez sur "New +" → "Web Service"
   - Connectez votre repository GitHub
   - Render détectera automatiquement le `package.json` et `render.yaml`
   - Cliquez sur "Create Web Service"

3. **Configuration automatique** :
   - **Build Command** : `npm install` (déjà configuré)
   - **Start Command** : `npm start` (déjà configuré)
   - **Plan** : Free (gratuit)

4. **HTTPS automatique** :
   - Render fournit automatiquement un certificat SSL/TLS gratuit
   - Votre site sera accessible via `https://votre-app.onrender.com`

### Notes importantes pour Render

- ✅ Le serveur utilise automatiquement HTTP (Render ajoute HTTPS automatiquement)
- ✅ Le port est géré via la variable d'environnement `PORT` (définie automatiquement par Render)
- ✅ HTTPS/TLS est géré automatiquement par Render (certificat SSL gratuit)
- ✅ Le plan gratuit permet un déploiement gratuit (avec quelques limitations)

## 🌐 Autres options de déploiement

Pour un déploiement public avec TLS géré automatiquement (HTTPS), vous pouvez aussi :

- Héberger `index.html` sur :
  - GitHub Pages
  - Netlify
  - OVH, Hostinger, etc. (hébergement mutualisé)
- Dans ces cas, la plateforme fournit généralement un certificat HTTPS gratuit (souvent via Let's Encrypt).

## ✏️ Personnalisation

- Modifiez le contenu de `index.html` (sections : À propos, Compétences, Projets, Formation, Contact) pour l’adapter à vos futurs projets.
- Ajoutez vos liens (GitHub, LinkedIn, etc.) dans la section contact si vous le souhaitez.

