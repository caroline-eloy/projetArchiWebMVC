// ----------> Controller des EXERCICES <----------

var connection = require('../db.js'); //connexion BDD

let Exercices = require('../models/exercicesModel.js');
listExercices = [];

//Route pour la page "Exercices" + affichage des données de la BDD
exports.exercices = function(req, res){
    connection.query('SELECT * FROM exercices',(err,data)=>{
        if(err){
            res.status(400).json({'message' : 'erreur'});
        } 
        else{
            res.status(200);
            console.log({listExercices:data});
            res.json({listExercices:data});
        }
    });
};

//Ajouter un élément à la liste des exercices

exports.ajoutexercices = function(req,res){
    let exercices = new Exercices(req.body.e_title, req.body.code_cours, req.body.idstudent, req.body.e_description);
    console.log(exercices);
    connection.query('INSERT INTO exercices set ?', exercices, (err,data)=>{
        if(err){
            res.status(400).json({'message' : 'erreur'});
        } 
        else{
            console.log('Ajout réussi');
            res.status(200).json({'message': 'ajout réussi'});
        }
    });
};

//Modifier un élément de la liste des exercices 

exports.updateexercice = function (req, res) {
    let exercices = new Exercices(req.params.e_title, req.params.code_cours, req.params.idstudent, req.params.e_description);
    console.log(exercices);
    connection.query("UPDATE exercices SET ? WHERE exercices.idexercices = ?",
      [exercices, req.params.idexercices], function (error, data) {
        if (error) {
            console.log(error);
            res.status(400).json({'message' : 'erreur'});
        } else {
            res.status(200).json({'message': 'modification réussie'});
        }
    })
};


//Supprimer un élément de la liste des exercices

exports.suppexercice = function (req, res) {
    let sql = "DELETE FROM exercices WHERE exercices.idexercices = ?";
    connection.query(sql, [req.params.idexercices], function (err, data) {
        if(err) {
            res.status(400).json({'message' : 'erreur'});
            console.log('Erreur supp Exercices');
        }
        else {
            console.log("Exercice supprimé");
            res.status(200).json({'message': 'suppression réussie'});
        }
    });
};
