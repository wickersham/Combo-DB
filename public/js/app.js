var app = angular.module("ngCombo", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "html/home.html"
    })
    .when("/games", {
        templateUrl: "html/games.html"
    })
    .when("/games/:game", {
        templateUrl: "html/game.html",
        controller: "getCharactersByGame"
    })
//    .when("/games/Street Fighter V", {
//        templateUrl: "html/sf5.html"
//    })






    .when("/Street Fighter V/select", {
        templateUrl: "html/SFVCharacters/SFVselect.html",
    })

    .when("/Street Fighter V/Chun Li", {
        templateUrl: "html/SFVCharacters/ChunLi.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Birdie", {
        templateUrl: "html/SFVCharacters/Birdie.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Cammy", {
        templateUrl: "html/SFVCharacters/Cammy.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Dhalsim", {
        templateUrl: "html/SFVCharacters/Dhalsim.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/FANG", {
        templateUrl: "html/SFVCharacters/FANG.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Karin", {
        templateUrl: "html/SFVCharacters/Karin.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Ken", {
        templateUrl: "html/SFVCharacters/Ken.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Laura", {
        templateUrl: "html/SFVCharacters/Laura.html",
        // controller: "getCombosByCharacter"
    })

    .when("/Street Fighter V/Necalli", {
        templateUrl: "html/SFVCharacters/Necalli.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Vega", {
        templateUrl: "html/SFVCharacters/Claw.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Bison", {
        templateUrl: "html/SFVCharacters/Dictator.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Nash", {
        templateUrl: "html/SFVCharacters/Nash.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Mika", {
        templateUrl: "html/SFVCharacters/Mika.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Rashid", {
        templateUrl: "html/SFVCharacters/Rashid.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Ryu", {
        templateUrl: "html/SFVCharacters/Ryu.html",
        // controller: "getCombosByCharacter"
    })
    .when("/Street Fighter V/Zangief", {
        templateUrl: "html/SFVCharacters/Zangief.html",
        // controller: "getCombosByCharacter"
    })









    .when("/games/:game/:character", {
        templateUrl: "html/charmander.html",
        controller: "getCombosByCharacter"
    })
    .when("/games/:game/:character/:id", {
        templateUrl: "html/combopage.html",
        controller: "getComboById"
    })
    .when("/help", {
        templateUrl: "html/help.html"
    })
    .when("/about", {
        templateUrl: "html/about.html"
    })
    .when("/submit", {
        templateUrl: "html/submit.html",
        controller: "comboConstruct"
    })
    .when("/guide", {
        templateUrl: "html/guide.html",
    })
    .when("/help/jargon", {
        templateUrl: "html/jargon.html",
    })
    .when("/help/notation", {
        templateUrl: "html/notation.html",
    })
    .when("/help/fundamentals", {
        templateUrl: "html/fundamentals.html",
    })
    .when("/help/advanced", {
        templateUrl: "html/advanced.html",
    })
    .when("/help/resources", {
        templateUrl: "html/resources.html",
    })
    .when("/frames", {
       templateUrl: "html/frames.html",
       controller: "frameData"
   })
//    .when("/test", {
//        templateUrl: "html/test.html"
//    })
//    .when("/test2", {
//        templateUrl: "html/test2.html"
//    })
//    .when("/games/sf5/ryu", {
//        templateUrl: "html/sf5ryu.html",
//        controller: "characterCombos"
//    })
//    .when("/games/UMVC3", {
//        templateUrl: "html/marvel3.html"
//
//    })
//    .when("/games/marvel3/ryu", {
//        templateUrl: "html/marvel3ryu.html"
//    })
//    .when("/games/test/:game", {
//        templateUrl: "html/game.html",
//        controller: "characterCombos"
//        })
    .when("/output", {
        templateUrl: "html/testoutput.html",
        controller: "comboList"
    })
    .when("/search", {
        templateUrl: "html/search.html",
        controller: "comboList"
    })
    .otherwise({
        redirectTo: "/home"
    });

});



app.filter("uniqueChar", function(){

    return function(input){
        var output = [];
        var outputName = [];

        angular.forEach(input, function(element){
            if(outputName.indexOf(element.character) === -1){
                output.push(element);
                outputName.push(element.character);
            }
        });

        return output;
    }
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
