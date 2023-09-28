const { inscription } = require("../models/index")

exports.create = (req, res) => {
    inscription.create(req.body)
        .then(() => {
            res.send({ succee: 'Nouveau inscription ajoutée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.getAll = (req, res) => {
    inscription.findAll()
        .then((result) => {
            res.send({ inscriptions: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}
exports.findOne = (req, res) => {
    inscription.findOne({ where: { id_inscription: req.params.id } })
        .then((result) => {
            res.send({ inscription: result })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.update = (req, res) => {
    inscription.update(req.body, { where: { id_inscription: req.params.id } })
        .then((result) => {
            res.send({ succee: 'inscription modifiée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.delete = (req, res) => {
    inscription.destroy({ where: { id_inscription: req.params.id } })
        .then((result) => {
            res.send({ succee: 'inscription supprimée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}