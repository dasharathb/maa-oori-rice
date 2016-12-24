'use strict';
angular.module('morApp')
.controller('accountCntrl',['$scope','$rootScope','accountFact',function($scope,$rootScope,accountFact){


	$scope.getAccDtl = function(){
     accountFact.getUserDetails($rootScope.emailId).then(function(data){
      console.log("user..........",data);
      $scope.accDtl = data;
      /*$scope.FirstName=data.firstName;
      $scope.LastName=data.lastName;
      $scope.Phone=data.phone;
      $scope.Email=data.email;
      $scope.Address=data.address.addressLine1;*/
     });
	};



	$scope.init = function(){
		$scope.getAccDtl();
	}

	$scope.init();
}]);