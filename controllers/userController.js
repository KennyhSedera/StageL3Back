const { user } = require("../models/index")
const multer = require('multer');
const path = require('path');


// Stockage des photos
const storage = multer.diskStorage({
    destination: './Images/Profile',
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
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_adress: req.body.user_adress,
        user_contact: req.body.user_contact,
        status_compte: 'inactive',
        password: req.body.password,
        user_profil: `/Images/Profile/${req.file.filename}`,
    }
    user.create(body)
        .then(() => {
            res.send({ succee: 'Nouveau user créée avec succèe.' });
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' });
        });
}
const CreateUser = [upload.single('profile'), create]
exports.signup = CreateUser

var Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
exports.signin = (req, res) => {
    user.findOne({ where: { user_email: req.body.email } })
    .then((data) => {
        if (data) {
            var passwordIsValid = bcrypt.compareSync( req.body.password, data.password );
            if (passwordIsValid) {
                res.send({user:data})
            } else {
                res.send({ error: "Le mot de passe que vous avez entrer est incorrect !" });
            }
        } else {
            res.send({error:'Verifier l\'adresse email que vous avez entrer !'})
        }
    }).catch((err) => {
        res.send(err.message)
    });
}

exports.getAll = (req, res) => {
    user.findAll()
        .then((result) => {
            res.send({ users: result });
        }).catch((err) => {
            res.send(err.message || 'Une erreur se produit.');
        });
}
exports.findOne = (req, res) => {
    user.findOne({ where: { id_user: req.params.id } })
        .then((result) => {
            res.send({ user: result })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.update = (req, res) => {
    user.update(req.body, { where: { id_user: req.params.id } })
        .then((result) => {
            res.send({ succee: 'user modifiée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.delete = (req, res) => {
    user.destroy({ where: { id_user: req.params.id } })
        .then((result) => {
            res.send({ succee: 'user supprimée avec succèe.' })
        }).catch((err) => {
            res.send({ error: err.message || 'Une erreur se produit.' })
        });
}
exports.verifiEmail = (req, res) => {
    user.findOne({ where: { user_email: req.body.email } })
    .then((data) => {
        if (data) {
            res.send({error:'Cette adresse email est déjà utilisée!'})
        } else {
            res.send({succee:'Nouvelle adresse email!'})
        }
    }).catch((err) => {
        res.send(err.message)
    });
}