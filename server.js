var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;


server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


// Client Routes

server.get("/",function(req,res){
  res.sendFile("public/index.html");
});

//api routes

server.get("/api/combos", function(req, res) {
    res.json({message:"get ye combos"});
});

server.post("/api/combos", function (req, res) {
    res.json({message:"posting"});
});

server.get("/api/combos/:id", function(req, res) {
    res.json({message:"get specific combo", id: req.params.id});
});

server.delete("/api/combos:id", function(req, res) {
    res.json({message:"deleting specific combo", id: req.params.id});
});

server.listen(1337, function(){
    console.log("now listening on port 1337");
});