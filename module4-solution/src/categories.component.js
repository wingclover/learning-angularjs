(function(){
	'use strict';

	angular.module('MenuApp')
	.component('categories',{
		templateUrl: 'src/templates/categories.template.html',
  		// controller: ShoppingListComponentController,
		bindings: {
		categories: '<'
		}
	});

	
})();