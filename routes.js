const express = require('express');
let router = express.Router();

// --------------> Controller des NodeJS <--------------

const controllerAccueil = require('./controller/controllerAccueil.js'); //controlleur page d'accueil
const controllerExercices = require('./controller/controllerExercices.js'); //controlleur page exercices
const controllerNotescours = require('./controller/controllerNotescours.js'); //controlleur page notes de cours
const controllerSynthese = require('./controller/controllerSynthese.js'); //controlleur page de synthèses

// --------------> Controller des API <--------------

let controllerApiSynthese = require('./controller/controllerApiSynthese.js'); //controlleur API page de synthèses
let controllerApiExercices = require('./controller/controllerApiExercices.js'); //controlleur API page exercices
let controllerApiNotescours = require('./controller/controllerApiNotescours.js'); //controlleur API page notes de cours


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
        //Supprimer une synthese
        router.get('/accueil/synthese/supprimer/:idsynthese', controllerSynthese.suppsynthese);
        

    // --------------> Routes API des SYNTHESES <--------------
    
        //Vue de la page synthèses
        router.get('/api/accueil/synthese', controllerApiSynthese.synthese);
        //Ajout d'une synthèse
        router.post('/api/accueil/synthese', controllerApiSynthese.ajoutsynthese);
        //Supprimer une synthèse
        router.delete('/api/accueil/synthese/:idsynthese', controllerApiSynthese.suppsynthese);

    // --------------> Routes des EXERCICES <--------------

        //Vue de la page exercices
        router.get('/accueil/exercices', controllerExercices.exercices);
        //Formulaire d'ajout d'exercices
        router.get('/ajoutdocument/exercices', controllerExercices.formulaireexercices);
        //Affichage d'ajout d'exercices
        router.post('/ajoutdocument/exercices', controllerExercices.ajoutexercices);
        //Affichage des exercices
        router.post('/accueil/exercices', controllerExercices.exercices);
        //Modifier un exercices
        router.get('/accueil/exercices/modifier/:idexercices', controllerExercices.formulaireupdateexercice);
        router.post('/accueil/exercices/modifier', controllerExercices.updateexercice);
        //Supprimer un exercice
        router.get('/accueil/exercices/supprimer/:idexercices', controllerExercices.suppexercice);

    // --------------> Routes API des EXERCICES <--------------
        
        //Vue de la page exercices
        router.get('/api/accueil/exercices', controllerApiExercices.exercices);
        //Ajout d'un exercice
        router.post('/api/accueil/exercices', controllerApiExercices.ajoutexercices);
        //Supprimer un exercice
        router.delete('/api/accueil/exercices/:idexercices', controllerApiExercices.suppexercice);

    // --------------> Routes des NOTES DE COURS <--------------

        //Vue de la page notes de cours
        router.get('/accueil/notesdecours', controllerNotescours.notesdecours);
        //Affichage des notes de cours
        router.post('/accueil/notesdecours', controllerNotescours.notesdecours);
        //Formulaire d'ajout de notes de cours
        router.get('/ajoutdocument/notesdecours', controllerNotescours.formulairenotescours);
        //Affichage d'ajout de notes de cours
        router.post('/ajoutdocument/notesdecours', controllerNotescours.ajoutnotescours);
        //Supprimer des notes de cours
        router.get('/accueil/notesdecours/supprimer/:idnotescours', controllerNotescours.suppnotescours);
      
    // --------------> Routes API des NOTES DE COURS <--------------

        //Vue de la page notes de cours
        router.get('/api/accueil/notesdecours', controllerApiNotescours.notesdecours);
        //Ajout d'une note de cours
        router.post('/api/accueil/notesdecours', controllerApiNotescours.ajoutnotescours);
        //Supprimer une note de cours
        router.delete('/api/accueil/notesdecours/:idnotescours', controllerApiNotescours.suppnotescours);


module.exports = router;