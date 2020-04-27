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
      
//Modifier un élément de la liste des synthèses
    //Formulaire de modification
    exports.formulaireupdatesynthese = function(req, res){
        console.log('renvoi formulaire');
        let idsynthese = req.params.idsynthese;
        let sql = "Select * from synthese WHERE synthese.`idsynthese` = ? ";
        connection.query(sql, idsynthese, function (err, data)  {
            if(err){
                res.status(400).send(err);
                console.log('erreur niveau formulaire modification')
            }
            else{
                res.status(202);
                console.log(data);
                synthese = data;
                res.render('updatesynthese.ejs',
                    { idsynthese: synthese[0].idsynthese, s_title: synthese[0].s_title, code_cours: synthese[0].code_cours, idstudent: synthese[0].idstudent, s_description: synthese[0].s_description });
            }
        });
    };

    //Route update
    exports.updatesynthese = function (req, res) {
        let synthese = new Synthese(req.body.s_title, req.body.code_cours, req.body.idstudent, req.body.s_description);
        console.log(synthese);
        connection.query("UPDATE synthese SET ? WHERE synthese.idsynthese = ?",
        [synthese, req.body.idsynthese], function (error, data) {
            if (error) {
                console.log(error);
                res.status(400).send(error);
            } else {
                res.status(202).redirect('/accueil/synthese');
            }
        })
    };


//Supprimer un élément de la liste des synthèses

exports.suppsynthese = function (req, res) {
    let sql = "DELETE FROM synthese WHERE synthese.idsynthese = ?";
    connection.query(sql, [req.params.idsynthese], function (err, data) {
        if(err) {
            res.status(400).send(err);
            console.log('Erreur supp Synthèse');
        }
        else {
            console.log("Synthese supprimée");
            res.redirect('/accueil/synthese');
        }
    });
};