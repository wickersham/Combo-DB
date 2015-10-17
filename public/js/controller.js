app.controller("comboConstruct", function($scope, $http) {
    $scope.comboData = {};
    
    $scope.createCombo = function() {
//        $scope.comboData.completed = false;
        $http.post("/wut/combos", $scope.comboData)
            .then(function(response) {
                $scope.comboData = {};
        });
    };
});

app.controller("comboList", function($scope, $http) {
    $scope.combos= [];
    
    var getCombos = function() {
        $http.get("/wut/combos")
            .then(function(response) {
                $scope.combos = response.data;
        });
    };
    
    getCombos();
    
    $scope.deleteCombo = function(id) {
        var url = "/wut/combos/" + id;
        
        $http.delete(url)
        .then(function(response){
            getCombos();
        });
    };

});