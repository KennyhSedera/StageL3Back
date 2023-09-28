const multer = require("multer")
const path = require("path")
const { adherent } = require("../models/index")


// Stockage des photos
const storage = multer.diskStorage({
    destination: './Images/Adherent',
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
        nom_Adh: req.body.nom_Adh,
        prenom_Adh: req.body.prenom_Adh,
        adresse_Adh: req.body.adresse_Adh,
        quartier_Adh: req.body.quartier_Adh,
        genre_Adh: req.body.genre_Adh,
        tel_Adh: req.body.tel_Adh,
        nationalite_Adh: req.body.nationalite_Adh,
        naissance_Adh: req.body.naissance_Adh,
        lieunaiss_Adh: req.body.lieunaiss_Adh,
        photo_Adh: `/Images/Adherent/${req.file.filename}`,
    }
    adherent.create(body)
        .then(() => {
            res.send({ succee: 'Nouveau adhèrent ajoutée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}

const CreateAdh = [upload.single('photo_adh'), create]
exports.create = CreateAdh

// exports.create = (req, res) => {
//     adherent.create(req.body)
//         .then(() => {
//             res.send({ succee: 'Nouveau adherent ajoutée avec succèe.' });
//         }).catch((err) => {
//             res.send({ error: err.message || 'Une erreur se produit.' });
//         });
// }

exports.getAll = (req, res) => {
    adherent.findAll()
        .then((result) => {
            res.send({ adherents: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}
exports.findOne = (req, res) => {
    adherent.findOne({ where: { id_adherent: req.params.id } })
        .then((result) => {
            res.send({ adherent: result });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.update = (req, res) => {
    adherent.update(req.body, { where: { id_adherent: req.params.id } })
        .then((result) => {
            res.send({ succee: 'adherent modifiée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.delete = (req, res) => {
    adherent.destroy({ where: { id_adherent: req.params.id } })
        .then((result) => {
            res.send({ succee: 'adherent supprimée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
exports.countAdh = (req, res) => {
    adherent.count()
        .then((result) => {
            res.send({ total: result });
        }).catch((err) => {
            res.send({ error: err.message });
        });
}