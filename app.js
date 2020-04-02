//fichier server

//Import express
let express = require('express');

//Initialize the app
let app = express();

// Analyse des données envoyées en POST
app.use(express.urlencoded({extended: false}));

//appeler les routes
let routes = require('./routes');
app.use('/', routes);

/*//Pour les POST requests
let bodyParser = require('body-parser');
//on indique à notre fichier d'utiliser bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/



//Setup server port 
var port = 4000
app.listen(port, function(){
    console.log("Server running on port" + port);
});