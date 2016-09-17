(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    $scope.lunch_message = "";
    $scope.items = "";
    $scope.border_style = "";

    $scope.displayMessage = function(){
        var items = $scope.items.split(",");
        var count = 0;
        var i;
        for (i=0; i<items.length; i++){
            if (items[i].trim()){
                count +=1;
            }
        };
        
        $scope.color_theme = "green";
        $scope.border_style = "border-style:solid";

        if (count == 0){
            $scope.lunch_message = "Please enter data first";
            $scope.color_theme = "red"
        } else if (count <= 3) {
            $scope.lunch_message = "Enjoy!"
        } else {
            $scope.lunch_message = "Too much!"
        };
        
    };
};
})();