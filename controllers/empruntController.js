const { emprunt, livre, inscription, adherent, Sequelize } = require("../models/index")

exports.create = (req, res) => {
    var d = new Date;
    d.setDate(d.getDate() + parseInt(req.body.duree_Emprunt));
    const body = {
        id_Livre: req.body.id_Livre,
        date_Emprunt: new Date,
        duree_Emprunt: req.body.duree_Emprunt,
        retour_Emprunt: d,
        id_AdhInsc: req.body.id_AdhInsc,
    }
    emprunt.create(body)
        .then(() => {
            livre.update({ status_livre: 'Emprunter' }, { where: { id_livre: req.body.id_Livre } })
            .then(() => {
                res.send({ succee: 'Nouveau emprunt ajoutée avec succèe.' });
            }).catch((err) => {
                res.send({ error: err.message || 'Une erreur se produit.' });
            });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.getAll = (req, res) => {
    emprunt.findAll({
        where: {
            id_AdhInsc: {
                [Sequelize.Op.ne]:null
            },
            id_Livre: {
                [Sequelize.Op.ne]:null
            },
        },
        include: [
            { model: livre, attributes: ['titre_livre', 'photo_livre', 'auteur_livre'] },
            {
                model: inscription, attributes: ['id_InscritAdh'],
                include: [{ model: adherent, attributes:['nom_Adh', 'prenom_Adh', 'photo_Adh'] }]
            }]
    })
        .then((result) => {
            res.send({ emprunts: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}
exports.findOne = (req, res) => {
    emprunt.findOne({ where: { id_emprunt: req.params.id } })
        .then((result) => {
            res.send({ emprunt: result })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.update = (req, res) => {
    emprunt.update(req.body, { where: { id_emprunt: req.params.id } })
        .then((result) => {
            res.send({ succee: 'emprunt modifiée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.delete = (req, res) => {
    emprunt.destroy({ where: { id_emprunt: req.params.id } })
        .then((result) => {
            res.send({ succee: 'emprunt supprimée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.countEmprunt = (req, res) => {
    emprunt.count()
        .then((result) => {
            res.send({ total: result });
        }).catch((err) => {
            res.send({ error: err.message });
        });
}
exports.empruntEnCours = (req, res) => {
    const date = new Date()
    emprunt.findAll({
        where: {
            retour_Emprunt: {
                [Sequelize.Op.gt]:date
            },
            id_AdhInsc: {
                [Sequelize.Op.ne]:null
            },
            id_Livre: {
                [Sequelize.Op.ne]:null
            },
        },
        include: [
            { model: livre, attributes: ['titre_livre', 'photo_livre', 'auteur_livre'] },
            {
                model: inscription, attributes: ['id_InscritAdh'],
                include: [{ model: adherent, attributes:['nom_Adh', 'prenom_Adh', 'photo_Adh'] }]
            }]
    })
    .then((result) => {
        res.send({emprunts:result})
    }).catch((err) => {
        res.send({error:err.message})
    });
}