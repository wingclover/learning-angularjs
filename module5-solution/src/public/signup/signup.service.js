(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


function SignupService() {

  var service = this;
  var user = {};

  service.create = function(firstName, lastName, email, phoneNumber, favorite){
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.favorite = favorite || 0;

    if (user.favorite){
      user.item_short_name = favorite.short_name;
      user.item_title = favorite.name;
      user.item_description = favorite.description;
      user.item_url = "https://ying-restaurant.herokuapp.com/images/"+ user.item_short_name + ".jpg";
    }

  };

  service.getInfo = function (){
    return user;
  }

}
})();
