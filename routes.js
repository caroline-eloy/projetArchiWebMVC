//fichier avec les routes
let express = require('express');
let router = express.Router();

const controller = require('./controller/controller.js');

//route page d'accueil
router.get('/', controller.accueil);


//route ajout de document
router.get('/accueil/ajoutdocument', controller.ajoutdocument);

    //route formulaire ajout synthèses
    router.get('/ajoutdocument/synthese', controller.formulairesyntheses);
    //route ajout de synthèses
    router.post('/ajoutdocument/synthese', controller.ajoutsynthese);
    //route synthèses
    router.get('/accueil/synthese', controller.synthese);
    // route affichage de synthèses
    router.post('/accueil/synthese', controller.synthese);

    //route formulaire ajout de notes de cours
    router.get('/ajoutdocument/notesdecours', controller.formulairenotescours);
    //route ajout de notes de cours
    router.post('/ajoutdocument/notesdecours', controller.ajoutnotescours);
    //route notes de cours
    router.get('/accueil/notesdecours', controller.notesdecours);
    //route affichage notes de cours
    router.post('/accueil/notesdecours', controller.notesdecours);

    //route formulaire ajout d'exercices
    router.get('/ajoutdocument/exercices', controller.formulaireexercices);
    //route ajout d'exercices
    router.post('/ajoutdocument/exercices', controller.ajoutexercices);
    //route exercices
    router.get('/accueil/exercices', controller.exercices);
    //route affichage exercices
    router.post('/accueil/exercices', controller.exercices);









module.exports = router;