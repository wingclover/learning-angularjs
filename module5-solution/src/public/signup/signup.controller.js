(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var ctrl = this;
  ctrl.firstName = "";
  ctrl.lastName = "";
  ctrl.email = "";
  ctrl.phoneNumber = "";
  ctrl.favorite = "";

  ctrl.signup = function(){
    SignupService.create(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phoneNumber, ctrl.favorite);
  }

})();
