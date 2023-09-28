const { typeAdh } = require("../models/index")

exports.create = (req, res) => {
    typeAdh.create(req.body)
        .then(() => {
            res.send({ succee: 'Nouveau type ajoutée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.getAll = (req, res) => {
    typeAdh.findAll()
        .then((result) => {
            res.send({ types: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}
exports.findOne = (req, res) => {
    typeAdh.findOne({ where: { id_type: req.params.id } })
        .then((result) => {
            res.send({ type: result })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.update = (req, res) => {
    typeAdh.update(req.body, { where: { id_type: req.params.id } })
        .then((result) => {
            res.send({ succee: 'type modifiée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.delete = (req, res) => {
    typeAdh.destroy({ where: { id_type: req.params.id } })
        .then((result) => {
            res.send({ succee: 'type supprimée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}