//fonction BDD MySQL

var connection = require('../models/db.js');
var model = require('../models/synthese_aff.js');

//route page d'accueil
exports.accueil = function(req, res) {
    res.render('accueil.ejs');
};

//route ajout de document
exports.ajoutdocument = function(req, res){
    res.render('add.ejs');
};
    // Formulaires d'ajout de documents

    //route ajout de synthèse
    exports.formulairesyntheses = function(req, res){
        res.render('addsynthese.ejs');
    };

    //route ajout de notes de cours
    exports.formulairenotescours = function(req, res){
        res.render('addnotescours.ejs');
    };

    //route ajout d'exercices
    exports.formulaireexercices = function(req, res){
        res.render('addexercices.ejs');
    };

    // Scripts d'ajout de documents

    //route ajout de synthese
    exports.ajoutsynthese = function(req,res){
        var model = require('../models/synthese_ajout.js');
        model(connection,req.body,(succes)=>{
            if(succes == true){
                res.redirect('/accueil/synthese')
            }else{
                res.send("Erreur lors de l'insertion")
            }
        })
    }

   

    // route ajout de note de cours
    exports.ajoutnotescours = function(req,res){
        var model = require('../models/notescours_ajout.js');
        model(connection,req.body,(succes)=>{
            if(succes == true){
                res.redirect('/accueil/notesdecours')
            }else{
                res.send("Erreur lors de l'insertion")
            }
        })
    }

    // route ajout d'exercices
    exports.ajoutexercices = function(req,res){
        var model = require('../models/exercices_ajout.js');
        model(connection,req.body,(succes)=>{
            if(succes == true){
                res.redirect('/accueil/exercices')
            }else{
                res.send("Erreur lors de l'insertion")
            }
        })
    }

//route exercices
exports.exercices = function(req, res){
    connection.query('SELECT * FROM exercices',(err,data)=>{
        if(err){
            throw err;
        } 
        else{
            console.log({listExercices:data});
            res.render('exercices.ejs', {listExercices:data});
        }
    });
};

//route notes de cours
exports.notesdecours = function(req, res){
    connection.query('SELECT * FROM notescours',(err,data)=>{
        if(err){
            throw err;
        } 
        else{
            console.log({listNotescours:data});
            res.render('notescours.ejs', {listNotescours:data});
        }
    })  
};

//route synthèses
exports.synthese = function(req, res){
    connection.query('SELECT * FROM synthese',(err,data)=>{
        if(err){
            throw err;
        } 
        else{
            console.log({listSyntheses:data});
            res.render('synthese.ejs', {listSynthese:data});
        }
    })
};    
