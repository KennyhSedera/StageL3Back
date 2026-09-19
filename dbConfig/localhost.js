const { Client } = require("pg");
const config = require("./db");

const connexion = new Client({
  host: config.Option.host,
  port: config.Option.port || 5432,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DATABASE,
});

connexion.connect((err) => {
  if (err) {
    console.error("Erreur de connexion PostgreSQL :", err.message);
  } else {
    console.log("Connexion à PostgreSQL réussie.");
  }
});

module.exports = connexion;
