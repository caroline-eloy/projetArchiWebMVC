module.exports = (connection,donnees,callback)=>{
    console.log(donnees);
    connection.query('INSERT INTO exercices SET ?',donnees,(err,data)=>{
        if(err){
            throw err;
            callback(false);
        } 
        else{
            console.log('Ajout réussi');
            callback(true);
        }
    })
}