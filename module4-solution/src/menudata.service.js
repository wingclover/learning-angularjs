(function(){
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.inject = ['$http'];
	function MenuDataService ($http){
		var service = this;

		service.getAllCategories = function(){
			return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/categories.json"
			}).then(function(result){
				return result.data})
		};

		service.getItemsForCategory = function(categoryShortName){
			var categoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
			return $http({
				method: "GET",
				url: categoryUrl
			}).then(function(result){
				return result.data.menu_items})
		};
	};
})();