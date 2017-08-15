(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


function SignupService($http, ApiPath) {

  var service = this;
  var user = {};

  service.create = function(firstName, lastName, email, phoneNumber, favorite){
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.favorite = favorite || 0;
  };

  service.getInfo = function (){
    return user;
  }


}
