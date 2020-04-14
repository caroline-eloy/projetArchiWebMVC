// ----------> Controller des SYNTHESES <----------

var connection = require('../db.js'); //connexion BDD

let Synthese = require('../models/syntheseModel');
listSynthese = [];

//Route pour la page "Synthèses" + affichage des données de la BDD pour les synthèses
exports.synthese = function(req, res){
    connection.query('SELECT * FROM synthese',(err,data)=>{
        if(err){
            res.status(400).send(err);
        } 
        else{
            res.status(200);
            console.log({listSyntheses:data});
            res.render('synthese.ejs', {listSynthese:data});
        }
    })
};

//Ajouter un élément à la liste des synthèses
    //route ajout de synthèse
    exports.formulairesyntheses = function(req, res){
        res.render('addsynthese.ejs');
    };
    //route ajout de synthese
    exports.ajoutsynthese = function(req,res){
        let synthese = new Synthese(req.body.s_title, req.body.code_cours, req.body.idstudent, req.body.s_description);
        //let synthese = new Synthese(s_title, code_cours, idstudent, s_description);
        console.log(synthese);
        connection.query('INSERT INTO synthese SET ?',synthese,(err,data)=>{
            if(err){
                res.status(400).send(err);
            } 
            else{
                console.log('Ajout réussi');
                res.status(201).redirect('/accueil/synthese');
            }
        })
    }
        
//Supprimer un élément de la liste des synthèses

exports.suppsynthese = function (req, res) {
    let sql = "DELETE FROM 'synthese' WHERE 'synthese'.'idsynthese' = ?";
    connection.query(sql, [req.params.idsynthese], function (err, data) {
        if(err) {
            res.status(400).send(err);
        }
        else {
            console.log("Synthese supprimée");
            res.redirect('/accueil/synthese');
        }
    });
};