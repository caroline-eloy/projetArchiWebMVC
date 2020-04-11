// ----------> Controller des EXERCICES <----------

var connection = require('../db.js'); //connexion BDD

let Exercices = require('../models/exercicesModel.js');
listExercices = [];

//Route pour la page "Exercices" + affichage des données de la BDD
exports.exercices = function(req, res){
    connection.query('SELECT * FROM exercices',(err,data)=>{
        if(err){
            res.status(400).send(err);
        } 
        else{
            res.status(200);
            console.log({listExercices:data});
            res.render('exercices.ejs', {listExercices:data});
        }
    });
};

//Ajouter un élément à la liste des exercices
    //Formulaire d'ajout d'exercices
    exports.formulaireexercices = function(req, res){
        res.render('addexercices.ejs');
    };
    //Route ajout d'exercices
    exports.ajoutexercices = function(req,res){
        let exercices = new Exercices(req.body.titre, req.body.codecours, req.body.identification, req.body.description);
        console.log(exercices);
        connection.query('INSERT INTO exercices set ?', exercices, (err,data)=>{
            if(err){
                res.status(400).send(err);
            } 
            else{
                console.log('Ajout réussi');
                res.status(201).redirect('/accueil/exercices');
            }
        })
    };

//Supprimer un élément de la liste des exercices

