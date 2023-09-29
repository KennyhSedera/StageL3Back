module.exports = (sequelize, Sequelize) => {
    const Livre = sequelize.define("livres", {
        id_livre: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titre_livre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        auteur_livre: {
            type: Sequelize.STRING,
            allowNull: true
        },
        edition_livre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date_edition_livre: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        date_enregistrement_livre: {
            type: Sequelize.DATE,
            allowNull: false
        },
        notation_livre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        format_livre: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        nb_page_livre: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        photo_livre: {
            type: Sequelize.STRING,
            allowNull: true
        },
        collection_livre: {
            type: Sequelize.STRING,
            allowNull: true
        },
        emplacement_livre: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
        {
            freezeTableName: true,
            timestamps: false
        });
    return Livre;
}