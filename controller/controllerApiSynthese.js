// ----------> Controller des SYNTHESES <----------

var connection = require('../db.js'); //connexion BDD

let Synthese = require('../models/syntheseModel');
listSynthese = [];

//Route pour la page "Synthèses" + affichage des données de la BDD pour les synthèses
exports.synthese = function(req, res){
    connection.query('SELECT * FROM synthese',(err,data)=>{
        if(err){
            res.status(400).json({'message': erreur});
        } 
        else{
            res.status(200);
            console.log({listSyntheses:data});
            res.json({listSynthese:data});
        }
    })
};

//Ajouter un élément à la liste des synthèses

exports.ajoutsynthese = function(req,res){
    let synthese = new Synthese(req.body.s_title, req.body.code_cours, req.body.idstudent, req.body.s_description);
    console.log(synthese);
    connection.query('INSERT INTO synthese SET ?',synthese,(err,data)=>{
        if(err){
            res.status(400).json({'message': 'erreur'});
        } 
        else{
            console.log('Ajout réussi');
            res.status(200).json({'message': 'ajout réussi'});
        }
    });
}
     
//Modifier un élément de la liste des synthèses

exports.updatesynthese = function (req, res) {
    let synthese = new Synthese(req.params.s_title, req.params.code_cours, req.params.idstudent, req.params.s_description);
    console.log(synthese);
    connection.query("UPDATE synthese SET ? WHERE synthese.idsynthese = ?",
    [synthese, req.params.idsynthese], function (error, data) {
        if (error) {
            console.log(error);
            res.status(400).json({'message' : 'erreur'});
        } else {
            res.status(200).json({'message': 'modification réussie'});
        }
    })
};

//Supprimer un élément de la liste des synthèses

exports.suppsynthese = function (req, res) {
    let sql = "DELETE FROM synthese WHERE synthese.idsynthese = ?";
    connection.query(sql, [req.params.idsynthese], function (err, data) {
        if(err) {
            res.status(400).json({'message' : 'erreur'});
            console.log('Erreur supp Synthèse');
        }
        else {
            console.log("Synthese supprimée");
            res.status(200).json({'message': 'suppression réussie'});
        }
    });
};