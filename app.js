// --------------> Serveur <--------------

//call express
let express = require('express');

//app va use express
let app = express();

//pour les POST request
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//appel BDD
let sql = require ('./db.js');



//importe les routes
let routes = require('./routes.js');
app.use('/', routes);

//lecture du CSS
app.use("/stylesheet", express.static('stylesheet'));

//Verification du port
let port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server running on port " + port);
});

