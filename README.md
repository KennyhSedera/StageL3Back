# 📚 StageL3Back — Backend de Gestion de Bibliothèque

API backend développée avec **Node.js** et **Express** pour la gestion de la bibliothèque (livres, membres, emprunts, retours) de l’Alliance Française.

---

## 🚀 Présentation

Ce backend est une API REST construite avec Node.js/Express qui permet de gérer :

- 📖 Les livres (CRUD)
- 👤 Les membres
- 📆 Les emprunts et les retours des livres
- 🔐 L’authentification 
- 📦 La communication avec un frontend (React ou autre)

L’API expose des routes pour interagir avec la base de données et supporte des opérations classiques de gestion d’une bibliothèque. :contentReference[oaicite:1]{index=1}

---

## 🧰 Technologies utilisées

| Partie | Technologie |
|--------|-------------|
| Langage | JavaScript (Node.js) |
| Serveur | Express.js |
| Base de données | (MySQL ) |
| ORM / DB | Sequelize |
| Gestion des environnements | dotenv |
| Hébergement | Vercel |
| Déploiement local | Node & npm |

---

## 📁 Structure du projet

StageL3Back/
├── controllers/ # Logiques métier
├── dbConfig/ # Config base de données
├── models/ # Modèles des entités (livres, membres, etc.)
├── routes/ # Endpoints Express
├── index.js # Point d’entrée de l’API
├── package.json # Dépendances & scripts
├── .gitignore
├── vercel.json  :contentReference[oaicite:2]{index=2}

---

## 🚀 Installation & Lancement

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/KennyhSedera/StageL3Back.git
cd StageL3Back
npm install
npm start
