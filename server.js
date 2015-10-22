var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//model
var comboSchema = new Schema({
    
    character: String,
    game: String,
    notation: String,
    damage: Number,
//    tags: Array,
//    modified: Date,
//    
//    stun: Number,
//    range: String, // must be close/far
//    aka: String,
//    notes: String,
    // yt/source field
    
});

var Combo = mongoose.model("Combo", comboSchema);

mongoose.connect("mongodb://localhost/combodatabase");


server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


// Client Routes

server.get("/",function(req,res){
    res.sendFile("public/index.html");
});

//api routes
//get combos route
server.get("/api/combos", function(req, res) {
    Combo.find({}, function(err, combos) {
        if(err){
            console.log(err);
        }
        res.json(combos);
    });
});

//delete da combos
server.delete("/api/combos/:id", function(req,res) {
    Combo.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            console.log(err);
        }
        res.send("baleeted");
    });
});


//save route
server.post("/api/combos", function(req, res) {
    var combo = new Combo({
        
        character: req.body.character,
        game: req.body.game,
        notation: req.body.notation,
        damage: req.body.damage,
//        tags: req.body.tags,
//        modified: req.body.modified,
//
//        stun: req.body.stun,
//        range: req.body.range, // must be close/far
//        aka: req.body.aka,
//        notes: req.notes,
        // yt/source field
 
    });
    //mongoose model function
    combo.save(function(err){
        if (err) {
            console.error(err);
        }
        console.log(combo);
        res.json(combo);
    })
});


server.listen(1337, function(){
    console.log("now listening on port 1337");
});




