var mysql=require("mysql2");
var dbConfig={
    host:"bstzs6xdlziilzcjlk84-mysql.services.clever-cloud.com",
    user:"ujfexdbib4nzuzsz",
    password:"fKAmF7wKqTVh91DvQcV3",
    database:"bstzs6xdlziilzcjlk84",
    dateStrings:true
  }
var dbCon=mysql.createConnection(dbConfig);
dbCon.connect(function(jasoos){
    if(jasoos==null)
       {       
    console.log("Connected to DataBase ✅");
       }
    else
        {
        console.log(jasoos);
        }
})

module.exports = dbCon;