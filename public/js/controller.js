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

//app.controller("gamesController", function($scope, $routeParams) {
//    
//    
//})