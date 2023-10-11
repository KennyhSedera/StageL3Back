const Sequelize = require('sequelize');
const config = require('../dbConfig/db');
const localhost = require('../dbConfig/localhost')
const db = {}

// Creation de base de donnes
async function initialize() {
    await localhost.query(`CREATE Database IF NOT EXISTS ${config.DATABASE}`, function (err, res) {
        if (err) throw err;
        else console.log('Base de donnee cree avec succee .');
    });
}

// Connexion a la DB
const sequelize = new Sequelize(
    config.DATABASE,
    config.USERNAME,
    config.PASSWORD,
    config.Option
);

// initialize();

try {
    sequelize.authenticate()
    console.log('Connection a la base de donnees avec succees !');
} catch (err) {
    console.log('error');
}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('./userModel')(sequelize, Sequelize);
db.livre = require('./livreModel')(sequelize, Sequelize);
db.adherent = require('./adherentModel')(sequelize, Sequelize);
db.emprunt = require('./empruntModel')(sequelize, Sequelize);
db.inscription = require('./inscriptionAdherentModel')(sequelize, Sequelize);
db.typeAdh = require('./typeAdherentModel')(sequelize, Sequelize);
db.retour = require('./livreRetour')(sequelize, Sequelize);

db.adherent.hasMany(db.inscription, { foreignKey: 'id_Adh' });
db.inscription.belongsTo(db.adherent, { foreignKey: 'id_Adh' });

db.typeAdh.hasMany(db.inscription, { foreignKey: 'id_TypeAdh' });
db.inscription.belongsTo(db.typeAdh, { foreignKey: 'id_TypeAdh' });

db.inscription.hasMany(db.emprunt, { foreignKey: 'id_AdhInsc' });
db.emprunt.belongsTo(db.inscription, { foreignKey: 'id_AdhInsc' });

db.emprunt.hasMany(db.retour, { foreignKey: 'id_Emprunt' });
db.retour.belongsTo(db.emprunt, { foreignKey: 'id_Emprunt' });

db.livre.hasMany(db.emprunt, { foreignKey: 'id_Livre' });
db.emprunt.belongsTo(db.livre, { foreignKey: 'id_Livre' });

module.exports = db;