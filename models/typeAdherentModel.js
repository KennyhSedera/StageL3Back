module.exports = (sequelize, Sequelize) => {
    const type = sequelize.define("typeadherent", {
        id_TypeAdh: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom_TypeAdh: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tarif_TypeAdh: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return type;
}