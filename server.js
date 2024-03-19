var express=require("express");
var bp=require("body-parser");
var app=express();
app.use(express.json({extended:true}));
app.use(bp.urlencoded({ extended: true }));

var userRouter=require("./routers/userRouter");

app.listen(2006,function(){
    console.log("Server Started at Port Number 2006");
  });
app.use(express.static("public"));
app.use("/user",userRouter);