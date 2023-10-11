const { livre, Sequelize } = require("../models/index");
const multer = require('multer');
const path = require('path');


// Stockage des photos
const storage = multer.diskStorage({
    destination: './Images/Livres',
    filename: (req, file, res) => {
        res(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
})
// creation livre
const create = (req, res) => {
    const body = {
        titre_livre: req.body.titre_livre,
        auteur_livre: req.body.auteur_livre,
        edition_livre: req.body.edition_livre,
        date_edition_livre: req.body.date_edition_livre,
        date_enregistrement_livre: req.body.date_enregistrement_livre,
        notation_livre: req.body.notation_livre,
        format_livre: req.body.format_livre,
        nb_page_livre: req.body.nb_page_livre,
        photo_livre: `/Images/Livres/${req.file.filename}`,
        collection_livre: req.body.collection_livre,
        emplacement_livre: req.body.emplacement_livre
    }
    livre.create(body)
        .then(() => {
            res.send({ succee: 'Nouveau livre ajoutée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
const success = (req, res) => {
    res.send({succee:'Image uploaded'})
}
const CreateLivre = [upload.single('photo_livre'), create]
exports.create = CreateLivre
exports.upload = [upload.single('photo_livre'), success];

exports.getAll = (req, res) => {
    livre.findAll({group:['titre_livre']})
        .then((result) => {
            res.send({ livres: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}

exports.getAllExp = (req, res) => {
    livre.findAll()
        .then((result) => {
            res.send({ livres: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}

exports.findOne = (req, res) => {
    livre.findOne({ where: { id_livre: req.params.id } })
        .then((result) => {
            res.send({ livre: result })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}

exports.update = (req, res) => {
    livre.update(req.body, { where: { id_livre: req.params.id } })
        .then((result) => {
            res.send({ succee: 'Livre modifiée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}

exports.delete = (req, res) => {
    livre.destroy({ where: { id_livre: req.params.id } })
        .then((result) => {
            res.send({ succee: 'Livre supprimée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}

exports.count = (req, res) => {
    livre.findAll({
        attributes: ['emplacement_livre', [Sequelize.fn('Count', Sequelize.col('id_livre')), 'Total']],
        group: 'emplacement_livre',
    })
        .then((result) => {
            res.send({ livre: result })
        }).catch((err) => {
            res.send({ error: err.message })
        });
}
exports.countLivre = (req, res) => {
    livre.count()
        .then((result) => {
            res.send({ total: result });
        }).catch((err) => {
            res.send({ error: err.message });
        });
}
exports.countEmprunt = (req, res) => {
    livre.count({where:{status_livre:'Emprunter'}})
        .then((result) => {
            res.send({ total: result });
        }).catch((err) => {
            res.send({ error: err.message });
        });
}