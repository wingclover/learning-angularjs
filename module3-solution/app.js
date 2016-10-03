(function (){

'use strict';

angular.module("NarrowItDownApp",[])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);

//directive
function FoundItemsDirective(){
	var ddo = {
		templateUrl: 'result.html',
		restrict: 'E',
		scope:{
			foundItems: '<',
			onRemove: '&'
		}

	};
	return ddo;
};




//controller
NarrowItDownController.inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var ctrl = this;
	ctrl.found = [];
	ctrl.searchTerm = "";

	
	ctrl.search = function(){

		ctrl.found = []
		ctrl.error = false;
		if (ctrl.searchTerm === "") {
			ctrl.error = true;
		} else {
			MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(result){
				ctrl.found = result;
				if (ctrl.found.length === 0) {
					ctrl.error = true;
				};
			});
		
		};
		
	};

	ctrl.removeItem = function(itemIndex){
		ctrl.found.splice(itemIndex, 1);
	}

};

//service
MenuSearchService.inject = ['$http'];
function MenuSearchService($http){
	var service = this;
	service.getMatchedMenuItems = function(searchTerm){
		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function(result){

			var foundItems = [];

			var items = result.data.menu_items;
			var i;
			for (i = 0; i < items.length; i ++) {
				if (items[i].description.search(searchTerm) != -1){
					foundItems.push(items[i]);
				};
			};
			return foundItems;

		});

	};


};


})();