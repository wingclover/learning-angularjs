(function(){
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope){
        var items = $scope.items.split(",");
        var count = 0;
        for (i=0, i<items.lenth, i++){
            if (items[i]){
                count +=1
            }
        };
        
        $scope.displayMessage = function(){
        
            $scope.color-theme = "green";
        
            if (count == 0){
                $scope.lunch-message = "Please enter data first";
                $scope.color-theme = "red"
            } else if (count <= 3) {
                $scope.lunch-message = "Enjoy!"
            } else {
                $scope.lunch-message = "Too much!"
            }
            
            return $scope.lunch-message;
        };
    }
})();