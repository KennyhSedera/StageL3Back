module.exports = (sequelize, Sequelize) => {
    const adherent = sequelize.define("adherent", {
        id_Adh: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_Adh: {
            type: Sequelize.STRING,
            allowNull: false
        },
        prenom_Adh: {
            type: Sequelize.STRING,
        },
        adresse_Adh: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quartier_Adh: {
            type: Sequelize.STRING
        },
        genre_Adh: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tel_Adh: {
            type: Sequelize.STRING
        },
        nationalite_Adh: {
            type: Sequelize.STRING
        },
        photo_Adh: {
            type: Sequelize.STRING
        },
        naissance_Adh: {
            type: Sequelize.DATE,
            allowNull: false
        },
        lieunaiss_Adh: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return adherent;
}