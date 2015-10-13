var app = angular.module("ngCombo", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "html/home.html"
    })
    .when("/games", {
        templateUrl: "html/games.html"
    })
    .when("/sf5", {
        templateUrl: "html/sf5.html"
    })
    .when("/glossary", {
        templateUrl: "html/glossary.html"
    })
    .when("/test", {
        templateUrl: "html/test.html"
    })
    .when("/test2", {
        templateUrl: "html/test2.html"
    })
    .when("/submit", {
        templateUrl: "html/submit.html"
    })
    .when("/sf5ryu", {
        templateUrl: "html/sf5ryu.html"
    })
    .otherwise({
        redirectTo: "/home"
    });


});


//var combotemplate = {
//    character: "Ryu",
//    game: "Street Fighter V",
//    notation: "cMK > hadoken > super",
//    damage: 344,
//    stun: 190,
//    aka: "low forward fireball super",
//    tags: ["easy", "hit confirm", "low start"],
//    youtube: "https://www.youtube.com/embed/dFSLtyfuGPQ",
//    modified: "9/24/15",
//};
//
//
//
//
//var quotebank = ["you can never lose with a good enough excuse", "that's why i dont go outside", "florida is not part of the east coast", "having trouble with an opponent who blocks too much? try using a throw!", "the answer lies in the heart of battle"];