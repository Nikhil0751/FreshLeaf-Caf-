var dbCon = require("../Database/config");
async function doCheck(req,resp){
    dbCon.query("select * from users where email=?",[req.query.kuchemail],function(err,resultTable){

        if(err==null) 
        {
          if(resultTable.length==1)
            resp.send("Already Taken...");
          else
            resp.send("");
          }
            else
          console.log(err);
    
      })
}

async function doSignup(req,resp){
  dbCon.query("insert into users(email,password,dos,status) values(?,?,current_date(),1)",[req.query.kuchemail,req.query.kuchPWD],function(err){
    if(err==null)
      {
        resp.send("You are Successfully Signed Up");
      }
      else
      {
        console.log(err);
      }
  });
}

async function doLoginChk(req,resp){
  dbCon.query("select * from users where email=(?)",[req.query.kuchemaillog],function(err,resultTable){
    if(err==null)
    {
      if(resultTable.length!=1)
      resp.send("Invalid Email-Id");
      else
      {
      resp.send(resultTable);
      }
    }
    else
    {
      console.log(err);
    }   
   }); 
}

async function doLogin(req,resp){
  dbCon.query("select * from users where email=? and password=?",[req.query.kuchemaillog,req.query.kuchpwdlog],function(err,resultTable){
    if(err==null)
      {
        if(resultTable.length!=1)
        resp.send("Incorrect Password");
        else 
        if(resultTable[0].status==1)
        {
        resp.send("Welcome");
      }
        else
        resp.send("User Blocked")
      }
  });
}
module.exports={doCheck,doSignup,doLoginChk,doLogin};