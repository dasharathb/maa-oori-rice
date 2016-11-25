'use strict';
angular.module('morApp')
.controller('loginCntr',[ '$rootScope', '$scope','$location', '$timeout', 'loginFactory','regFactory',
	function($rootScope, $scope, $location, $timeout, loginFactory, regFactory){
	console.log('hello this is home page controller...');
	
	$scope.login = function(){
		$rootScope.isLoggedIn = false;
		var loginDtl = {};
		loginDtl.userName = $scope.userName;
		loginDtl.password = $scope.password;
		loginFactory.loginUser(loginDtl).then(function(result){
			console.log('---------->',result);			
			$rootScope.loginUserName = result.firstName+" "+result.lastName;
			$rootScope.isLoggedIn = true;		
			
			$location.path('/product');
		});
	}	
	$scope.Register=function(){
		$location.path('/registration');
		var regDtl = {};
		regDtl.firstName=$scope.fName;
		regDtl.lastName=$scope.lName;
		regDtl.email=$scope.email;
		regDtl.phoneNumber=$scope.phone;
		regDtl.line1=$scope.Line1;
		regDtl.line2=$scope.Line2;
		regDtl.city=$scope.City;
		regDtl.state=$scope.State;
		regDtl.pin=$scope.Pin;
		//console.log($scope.firstName,$scope.lastName,$scope.email,$scope.phoneNumber,$scope.line1,$scope.line2,$scope.city,$scope.state,$scope.pin);
        regFactory.userReg(regDtl).then(function(result){
        	console.log("registration");


        });	

	}
	
}]); 