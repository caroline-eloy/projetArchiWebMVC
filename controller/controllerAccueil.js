//Route vers la page d'accueil
exports.accueil = function(req, res) {
    res.render('accueil.ejs');
};

//route ajout de document
exports.ajoutdocument = function(req, res){
    res.render('add.ejs');
};