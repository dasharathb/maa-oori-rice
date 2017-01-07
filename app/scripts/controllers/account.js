'use strict';
angular.module('morApp')
.controller('accountCntrl',['$scope','$rootScope','accountFact',function($scope,$rootScope,accountFact){


	$scope.getAccDtl = function(){
     accountFact.getUserDetails($rootScope.emailId).then(function(data){
      console.log("user..........",data);
      $scope.accDtl = data;
           });
	};



	$scope.init = function(){
		$scope.getAccDtl();
	}

	$scope.init();
}]);