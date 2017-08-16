(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getItemInfo = function (short_name){
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json')
    .then(function (response) {
        return response.data;
    })
    .catch(function (data) {
        // Handle error here
        if (data.status===500){
          console.log("caught 500");
          return false;
        }
    });
  };

  service.getShortNames = function(){
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var result = [];
      var l = response.data.menu_items;
      for (var i = 0; i < l.length; i++){
        result.push(l[i]["short_name"])
      }
      return result;
    });
  };
}



})();
