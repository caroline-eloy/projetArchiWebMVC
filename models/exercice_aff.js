module.exports = (connection,callback)=>{
    connection.query('SELECT * FROM exercices',(err,data)=>{
        if(err){
            throw err;
        } 
        else{
            console.log({listExercices:data});
            callback('exercices.ejs', {listExercices:data});
        }
    })
}