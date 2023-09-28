var Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));


// Creation Table User
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        user_profil: {
            type: Sequelize.STRING,
        },
        user_adress: {
            type: Sequelize.STRING,
        },
        user_contact: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status_compte: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            set(value) {
                bcrypt.genSaltAsync(10)
                    .then(salt => bcrypt.hashSync(value, salt))
                    .then(hash => this.setDataValue('password', hash));
            }
        },
    },
        {
            freezeTableName: true,
            timestamps: true
        });
    return User
}