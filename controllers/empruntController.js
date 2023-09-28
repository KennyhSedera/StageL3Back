const { emprunt } = require("../models/index")

exports.create = (req, res) => {
    emprunt.create(req.body)
        .then(() => {
            res.send({ succee: 'Nouveau emprunt ajoutée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.getAll = (req, res) => {
    emprunt.findAll()
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