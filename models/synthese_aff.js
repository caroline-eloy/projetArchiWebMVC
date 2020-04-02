module.exports = (connection,callback)=>{
    connection.query('SELECT * FROM synthese',(err,data)=>{
        if(err){
            throw err;
        } 
        else{
            console.log({listSyntheses:data});
            callback('synthese.ejs', {listSyntheses:data});
        }
    })
}
