//Database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root', 
    password : '17.cEloy',
    database : 'db_projetarchi'
});
connection.connect(function(error) { 
    if (error) throw error;
    console.log('Connexion réussie')
});
module.exports = connection;