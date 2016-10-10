(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items', 'cat'];
function ItemsController(items, cat) {
  var ctrl = this;
  ctrl.items = items;
  ctrl.cat = cat;
}

})();