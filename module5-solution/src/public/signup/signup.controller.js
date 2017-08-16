(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService', 'shortNameList'];
function SignupController(MenuService, SignupService, shortNameList) {
  var ctrl = this;
  ctrl.firstName = "";
  ctrl.lastName = "";
  ctrl.email = "";
  ctrl.phoneNumber = "";
  ctrl.favorite = "";
  ctrl.submitted = false;
  ctrl.item = "test";
  ctrl.shortNameList = shortNameList;


  ctrl.favValid = function (){
    if (ctrl.favorite){
      if (ctrl.shortNameList.indexOf(ctrl.favorite)!=-1){
        return true;
      }
      else {
        return false;
      }

    }
    else {
      return false;
    }
  }

  ctrl.signup = function(){
    if (ctrl.favorite){
      MenuService.getItemInfo(ctrl.favorite).then(function(result){
        ctrl.item = result;
        if (ctrl.item){
          SignupService.create(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phoneNumber, ctrl.item);
          ctrl.submitted = true;
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
