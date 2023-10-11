module.exports = (sequelize, Sequelize) => {
    const inscription = sequelize.define("inscriptionadherent", {
        id_InscritAdh: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        date_InscritAdh: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        fin_InscritAdh: {
            type: Sequelize.DATE,
            allowNull: false
        },
        fraisInscritAdh: {
            type: Sequelize.INTEGER,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return inscription;
}