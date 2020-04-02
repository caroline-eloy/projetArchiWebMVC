module.exports = (connection,callback)=>{
    connection.query('SELECT * FROM notescours',(err,data)=>{
        if(err){
            throw err;
        } 
        else{
            console.log({listNotescours:data});
            callback('notescours.ejs', {listNotescours:data});
        }
    })
}