module.exports = (sequelize, Sequelize) => {
    const retour = sequelize.define("retourlivre", {
        id_retour: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateretour: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
        {
            freezeTableName: true,
            timestamps: false
        });
    return retour;
}