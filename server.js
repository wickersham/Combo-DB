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
    notes: String,
    stun: Number,
    tags: String,
    modified: String,
    versioninfo: String,
    range: String,
    difficulty: String,
    submitter: String
//    aka: String,

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

//get characters by game
server.get("/api/combos/:game", function(req, res) {
    Combo.find({"game": req.params.game}, function(err, combos) {
        if(err) {
            console.log(err);
        }
        res.send(combos);
    });
});


//get combos by game and character
server.get("/api/combos/:game/:character", function(req, res) {
    Combo.find({"game": req.params.game, "character": req.params.character}, function(err, combos) {
        if(err) {
            console.log(err);
        }
        res.send(combos);
    });
});

//get one combo by id
server.get("/api/combos/combo/id/:id", function(req, res) {
    Combo.findOne({_id: req.params.id}, function(err, combos) {
        if(err) {
            console.log(err);
        }
        res.send(combos);
    });
});


//for last modified
var dt = new Date();

// Display the month, day, and year. getMonth() returns a 0-based number.
var month = dt.getMonth()+1;
var day = dt.getDate();
var year = dt.getFullYear();
//document.write(month + '-' + day + '-' + year);
// Output: current month, day, year

//save route
server.post("/api/combos", function(req, res) {
    var combo = new Combo({

        character: req.body.character,
        game: req.body.game,
        notation: req.body.notation,
        damage: req.body.damage,
        tags: req.body.tags,
        stun: req.body.stun,
        notes: req.body.notes,
        range: req.body.range,
        difficulty: req.body.difficulty,
        modified: month + '-' + day + '-' + year,
        submitter: req.body.submitter,
        versioninfo: req.body.versioninfo,

//        aka: req.body.aka,
//
        // yt/source field

    });
    //mongoose model function
    combo.save(function(err){
        if (err) {
            console.error(err);
        }
//        console.log(combo.tags);
        res.json(combo);
    })
});






server.listen(1337, function(){
    console.log("now listening on port 1337");
});
