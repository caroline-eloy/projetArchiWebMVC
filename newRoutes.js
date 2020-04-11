const express = require('express');
let router = express.Router();

const controllerAccueil = require('./controller/controllerAccueil.js'); //controlleur page d'accueil
const controllerExercices = require('./controller/controllerExercices.js'); //controlleur page exercices
const controllerNotescours = require('./controller/controllerNotescours.js'); //controlleur page notes de cours
const controllerSynthese = require('./controller/controllerSynthese.js'); //controlleur page de synthèses


// --------------> Routes des vues principales <--------------

router.get('/', controllerAccueil.accueil); //page d'accueil
router.get('/accueil/ajoutdocument', controllerAccueil.ajoutdocument); //page ajout de document

    // --------------> Routes des SYNTHESES <--------------

        //Vue de la page synthèses
        router.get('/accueil/synthese', controllerSynthese.synthese);
        //Affichage des synthèses
        router.post('/accueil/synthese', controllerSynthese.synthese);
        //Formulaire d'ajout d'une synthèse
        router.get('/ajoutdocument/synthese', controllerSynthese.formulairesyntheses);
        //Ajout d'une synthèse
        router.post('/ajoutdocument/synthese', controllerSynthese.ajoutsynthese);
        
    
    // --------------> Routes des EXERCICES <--------------

        //Formulaire d'ajout d'exercices
        router.get('/ajoutdocument/exercices', controllerExercices.formulaireexercices);
        //Affichage d'ajout d'exercices
        router.post('/ajoutdocument/exercices', controllerExercices.ajoutexercices);
        //Vue de la page exercices
        router.get('/accueil/exercices', controllerExercices.exercices);
        //Affichage des exercices
        router.post('/accueil/exercices', controllerExercices.exercices);

        
        
    // --------------> Routes des NOTES DE COURS <--------------

        //Vue de la page notes de cours
        router.get('/accueil/notesdecours', controllerNotescours.notesdecours);
        //Affichage des notes de cours
        router.post('/accueil/notesdecours', controllerNotescours.notesdecours);
        //Formulaire d'ajout de notes de cours
        router.get('/ajoutdocument/notesdecours', controllerNotescours.formulairenotescours);
        //Affichage d'ajout de notes de cours
        router.post('/ajoutdocument/notesdecours', controllerNotescours.ajoutnotescours);
        
module.exports = router;