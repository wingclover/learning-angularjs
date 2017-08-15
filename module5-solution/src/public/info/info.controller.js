(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignupService', 'MenuService'];
function InfoController(SignupService, MenuService) {
  var ctrl = this;
  var ctrl.user = SignupService.getInfo();
  var favorite_item = 



})();
