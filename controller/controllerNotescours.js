// ----------> Controller des NOTES DE COURS <----------

var connection = require('../db.js'); //connexion BDD

let NotesCours = require('../models/notescoursModel.js');
listNotescours = [];

//Route pour la page "Notes de cours" + affichage des données de la BDD pour les notes de cours
exports.notesdecours = function(req, res){
    connection.query('SELECT * FROM notescours',(err,data)=>{
        if(err){
            res.status(400).send(err);
        } 
        else{
            res.status(200);
            console.log({listNotescours:data});
            res.render('notescours.ejs', {listNotescours:data});
        }
    })  
};

//Ajouter un élément à la liste des notes de cours
    //route ajout de notes de cours
    exports.formulairenotescours = function(req, res){
        res.render('addnotescours.ejs');
    };

    // route ajout de note de cours
    exports.ajoutnotescours = function(req,res){
        let notesdecours = new NotesCours(req.body.n_title, req.body.code_cours, req.body.idstudent, req.body.n_description);
        console.log(notesdecours);
        connection.query('INSERT INTO notescours SET ?', notesdecours, (err,data)=>{
            if(err){
                res.status(400).send(err);
            } 
            else{
                console.log('Ajout réussi');
                res.status(201).redirect('/accueil/notesdecours');
            }
        })
    };

//Modifier un élément de la liste des notes de cours
    //Formulaire de modification
    exports.formulaireupdatenotesdecours = function(req, res){
        console.log('renvoi formulaire');
        let idnotescours = req.params.idnotescours;
        let sql = "Select * from notescours WHERE notescours.`idnotescours` = ? ";
        connection.query(sql, idnotescours, function (err, data)  {
            if(err){
                res.status(400).send(err);
                console.log('erreur niveau formulaire modification')
            }
            else{
                res.status(202);
                console.log(data);
                notescours = data;
                res.render('updatenotesdecours.ejs',
                    { idnotescours: notescours[0].idnotescours, n_title: notescours[0].n_title, code_cours: notescours[0].code_cours, idstudent: notescours[0].idstudent, n_description: notescours[0].n_description });
            }
        });
    };

    //Route update
    exports.updatenotesdecours = function (req, res) {
        let notesdecours = new NotesCours(req.body.n_title, req.body.code_cours, req.body.idstudent, req.body.n_description);
        console.log(notesdecours);
        connection.query("UPDATE notescours SET ? WHERE notescours.idnotescours = ?",
        [notesdecours, req.body.idnotescours], function (error, data) {
            if (error) {
                console.log(error);
                res.status(400).send(error);
            } else {
                res.status(202).redirect('/accueil/notesdecours');
            }
        })
    };



//Supprimer un élément de la liste des notes de cours

exports.suppnotescours = function (req, res) {
    let sql = "DELETE FROM notescours WHERE notescours.idnotescours = ?";
    connection.query(sql, [req.params.idnotescours], function (err, data) {
        if(err) {
            res.status(400).send(err);
            console.log ('Erreur supp Notes de cours');
        }
        else {
            console.log("Notes de cours supprimées");
            res.redirect('/accueil/notesdecours');
        }
    });
};