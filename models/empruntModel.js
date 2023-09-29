module.exports = (sequelize, Sequelize) => {
    const emprunt = sequelize.define("emprunt", {
        id_Emprunt: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date_Emprunt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        duree_Emprunt: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        retour_Emprunt: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return emprunt;
}