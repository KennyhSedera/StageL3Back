const express = require('express');
const route = express.Router();

const livres = require('../controllers/livreController')
route.post('/livre', livres.create)
route.get('/livre', livres.getAll)
route.get('/livre/:id', livres.findOne)
route.put('/livre/:id', livres.update)
route.delete('/livre/:id', livres.delete)
route.get('/livreCountByEmplacement', livres.count)
route.get('/livreCount', livres.countLivre)
route.get('/totalEmprunt', livres.countEmprunt)
route.get('/livreExp', livres.getAllExp)
route.get('/livreDispo', livres.getAllLivreDispo)

const adherents = require('../controllers/adherentController')
route.post('/adherent', adherents.create)
route.get('/adherent', adherents.getAll)
route.get('/adherentNoInsc', adherents.getAllAdhNonInscrit)
route.get('/adherent/:id', adherents.findOne)
route.put('/adherent/:id', adherents.update)
route.delete('/adherent/:id', adherents.delete)
route.get('/adherentCount', adherents.countAdh)

const emprunts = require('../controllers/empruntController')
route.post('/emprunt', emprunts.create)
route.get('/emprunt', emprunts.getAll)
route.get('/empruntEnCours', emprunts.empruntEnCours)
route.get('/emprunt/:id', emprunts.findOne)
route.put('/emprunt/:id', emprunts.update)
route.delete('/emprunt/:id', emprunts.delete)
route.get('/empruntCount', emprunts.countEmprunt)

const inscription = require('../controllers/inscriptionController')
route.post('/inscription', inscription.create)
route.get('/inscription', inscription.getAll)
route.get('/inscription/:id', inscription.findOne)
route.put('/inscription/:id', inscription.update)
route.delete('/inscription/:id', inscription.delete)

const type = require('../controllers/typeController')
route.post('/type', type.create)
route.get('/type', type.getAll)
route.get('/type/:id', type.findOne)
route.put('/type/:id', type.update)
route.delete('/type/:id', type.delete)

const user = require('../controllers/userController')
route.post('/signup', user.signup)
route.post('/signin', user.signin)
route.post('/verifieemail', user.verifiEmail)
route.get('/user', user.getAll)
route.get('/user/:id', user.findOne)
route.put('/user/:id', user.update)
route.delete('/user/:id', user.delete)

route.post('/upload', livres.upload)

module.exports = route;