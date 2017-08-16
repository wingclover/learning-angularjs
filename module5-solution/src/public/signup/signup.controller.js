(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService'];
function SignupController(MenuService, SignupService) {
  var ctrl = this;
  ctrl.firstName = "";
  ctrl.lastName = "";
  ctrl.email = "";
  ctrl.phoneNumber = "";
  ctrl.favorite = "";
  ctrl.favValid = true;
  ctrl.submitted = false;
  ctrl.item = "test";

  ctrl.signup = function(){
    if (ctrl.favorite){
      MenuService.getItemInfo(ctrl.favorite).then(function(result){
        ctrl.item = result;
        if (ctrl.item){
          SignupService.create(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phoneNumber, ctrl.item);
          ctrl.favValid = true;
          ctrl.submitted = true;
        }
        else {
          ctrl.favValid = false;
        }

      });

    }
    else {
      SignupService.create(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phoneNumber);
      ctrl.submitted = true;
    }


  }
}


})();
