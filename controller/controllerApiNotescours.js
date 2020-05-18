// ----------> Controller des NOTES DE COURS <----------

var connection = require('../db.js'); //connexion BDD

let NotesCours = require('../models/notescoursModel.js');
listNotescours = [];

//Route pour la page "Notes de cours" + affichage des données de la BDD pour les notes de cours
exports.notesdecours = function(req, res){
    connection.query('SELECT * FROM notescours',(err,data)=>{
        if(err){
            res.status(400).json({'message' : 'erreur'});
        } 
        else{
            res.status(200);
            console.log({listNotescours:data});
            res.json({listNotescours:data});
        }
    })  
};

//Ajouter un élément à la liste des notes de cours

exports.ajoutnotescours = function(req,res){
    let notesdecours = new NotesCours(req.body.n_title, req.body.code_cours, req.body.idstudent, req.body.n_description);
    console.log(notesdecours);
    connection.query('INSERT INTO notescours SET ?', notesdecours, (err,data)=>{
        if(err){
            res.status(400).json({'message' : 'erreur'});
        } 
        else{
            console.log('Ajout réussi');
            res.status(200).json({'message': 'ajout réussi'});
        }
    });
};

//Modifier un élément de la liste des notes de cours
    
exports.updatenotesdecours = function (req, res) {
    let notesdecours = new NotesCours(req.body.n_title, req.body.code_cours, req.body.idstudent, req.body.n_description);
    console.log(notesdecours);
    connection.query("UPDATE notescours SET ? WHERE notescours.idnotescours = ?",
    [notesdecours, req.body.idnotescours], function (error, data) {
        if (error) {
            console.log(error);
            res.status(400).json({'message' : 'erreur'});
        } else {
            res.status(200).json({'message': 'modification réussie'});
        }
    })
};


//Supprimer un élément de la liste des notes de cours

exports.suppnotescours = function (req, res) {
    let sql = "DELETE FROM notescours WHERE notescours.idnotescours = ?";
    connection.query(sql, [req.params.idnotescours], function (err, data) {
        if(err) {
            res.status(400).json({'message' : 'erreur'});
            console.log('Erreur supp Notes de cours');
        }
        else {
            console.log("Notes de cours supprimées");
            res.status(200).json({'message': 'suppression réussie'});
        }
    });
};