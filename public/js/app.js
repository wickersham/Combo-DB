var app = angular.module("ngCombo", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "html/home.html"
    })
    .when("/games", {
        templateUrl: "html/games.html"
    })
//    .when("/games/:game", {
//        templateUrl: "",
//        controller: "gamesController""
//    })
    .when("/games/sf5", {
        templateUrl: "html/sf5.html"
    })
    .when("/help", {
        templateUrl: "html/help.html"
    })
    .when("/test", {
        templateUrl: "html/test.html"
    })
    .when("/test2", {
        templateUrl: "html/test2.html"
    })
    .when("/submit", {
        templateUrl: "html/submit.html",
        controller: "comboConstruct"
    })
    .when("/games/sf5/ryu", {
        templateUrl: "html/sf5ryu.html",
        controller: "characterCombos" 
    })
    .when("/games/marvel3", {
        templateUrl: "html/marvel3.html"
    })
    .when("/games/marvel3/ryu", {
        templateUrl: "html/marvel3ryu.html"
    })
    .when("/output", {
        templateUrl: "html/testoutput.html",
        controller: "comboList"
    })
    .otherwise({
        redirectTo: "/home"
    });

});



//
//function samplecontroller($scope) {
//    $scope.status = [
//        {value: "none", text: "None"},
//        {value: "normal", text: "Normal"},
//        {value: "cnormal", text: "CommandNormal"},
//        {value: "special", text: "Special"},
//        {value: "ca", text: "CriticalArt"},
//        {value: "vskill", text: "Vskill"},
//        {value: "vtrigger", text: "Vtrigger"},
//        {value: "throw", text: "Throw"}
//    ];
//    $scope.state = $scope.status[0];
//
//}


//var quotebank = ["you can never lose with a good enough excuse", "that's why i dont go outside", "florida is not part of the east coast", "having trouble with an opponent who blocks too much? try using a throw!", "the answer lies in the heart of battle"];