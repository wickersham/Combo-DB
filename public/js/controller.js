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

app.controller("characterCombos", function($scope, $http, $route) {
    $scope.combosbycharacter = [];
    

    var getCombosByCharacter = function() {
        $http.get("/api/combos/:game/:character")
            .then(function(response) {
            $scope.combosbycharacter = response.data;
         console.log($route.current);
        });
    };
    getCombosByCharacter();
});

app.controller("grabCharactersFromGame", function($scope, $http, $route) {
    $scope.getyecharacters = [];
    
    var getCharacters = function() {
        $http.get("/api/combos/" + $route.current.params.game)
        .then(function(response) {
            $scope.getyecharacters = response.data;
        });
    };
    getCharacters();
});

//app.controller("gamesController", function($scope, $routeParams) {
//    $scope.model
//    
//})