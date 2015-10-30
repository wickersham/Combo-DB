app.controller("comboConstruct", function($scope, $http) {
    $scope.comboData = {};
    
    $scope.createCombo = function() {
//        $scope.comboData.completed = false;
        
        $http.post("/api/combos", $scope.comboData)
            .then(function(response) {
                console.log(response);
                $scope.comboData = {};
        });
    };
});

app.controller("comboList", function($scope, $http) {
    $scope.combos= [];
    
    var getCombos = function() {
        $http.get("/api/combos")
            .then(function(response) {
                $scope.combos = response.data;
        });
    };
    
    getCombos();
    
    $scope.deleteCombo = function(id) {
        var url = "/api/combos/" + id;
        
        $http.delete(url)
            .then(function(response){
                getCombos();
            });
    };
});

app.controller("getCombosByCharacter", function($scope, $http, $route) {
    $scope.combosbycharacter = [];
    

    var getCombosByCharacter = function() {
        $http.get("/api/combos/" + $route.current.params.game 
                 + "/" + $route.current.params.character)
            .then(function(response) {
            $scope.combosbycharacter = response.data;
//         console.log($route.current.params.game);
        });
    };
    getCombosByCharacter();
});

app.controller("getCharactersByGame", function($scope, $http, $route) {
    $scope.charactersbygame = [];
    
    var getCharactersByGame = function() {
        $http.get("/api/combos/" + $route.current.params.game)
        .then(function(response) {
            $scope.charactersbygame = response.data;
//            console.log($route.current.params.game);
        });
    };
    getCharactersByGame();
});

app.controller("getComboById", function($scope, $http, $route) {

    $scope.combobyid = [];
    var getComboById = function() {
        $http.get("/api/combos/combo/id/" + $route.current.params.id)
        .then(function(response) {
//            console.log(response);
            $scope.combobyid = response.data;
//            console.log($route.current.params.id);
        });
    };
    getComboById();
});

//app.controller("gamesController", function($scope, $routeParams) {
//    $scope.model
//    
//})