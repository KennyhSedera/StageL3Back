const { retour, emprunt, livre } = require("../models/index")

exports.create = (req, res) => {
    emprunt.getOne({ where: { id_Emprunt: req.body.id_Emprunt } })
        .then((result) => {
        if (result) {
            livre.update({ status_livre: 'Dispo' }, { where: { id_livre: result.id_Livre } })
            .then(() => {
                retour.create(req.body)
                .then(() => {
                    res.send({succee: 'Retour de livre avec succèe.'}); 
                }).catch((err) => {
                    res.send({error:err.message || 'Une erreur se produit lors du retour de livre.'}); 
                });
            })
        }
    }).catch((err) => {
        res.send({error:err.message || 'Une erreur se produit lors d\'affichage d\'emprunt.'}); 
    });
}

exports.getAll = (req, res) => {
    retour.findAlll({
        where: {
            id_Emprunt:{
                [Sequelize.Op.ne]: null
            }
        }
    })
    .then((result) => {
        res.send({livreretour:result});
    }).catch((err) => {
        res.send({error:err.message || 'Une erreur se produit lors de \'affichage des livres.'});
    });
}