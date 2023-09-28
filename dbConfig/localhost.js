const config = require('../dbConfig/db');
const mysql = require('mysql');


const connexion = mysql.createConnection({
    host: config.Option.host,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE
});

connexion.connect((req, res, err) => {
    if (err) {
        res.send(err)
    } else console.log('Connexion au Localhost reussi.');
})

module.exports = connexion; 