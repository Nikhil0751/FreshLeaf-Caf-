var express=require("express");
var app=express.Router();
var controllerIndex = require("../controllers/userController");

app.get("/check",controllerIndex.doCheck);
app.get("/signup",controllerIndex.doSignup);
app.get("/login-chk",controllerIndex.doLoginChk);
app.get("/login",controllerIndex.doLogin);

module.exports=app;