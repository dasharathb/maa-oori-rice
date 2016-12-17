'use strict';

angular.module('morApp')
.controller('userRegCntr',['$scope', '$rootScope', '$location', 'regFactory',
	function($scope, $rootScope, $location, regFactory){
	console.log('hello this is user Registration page controller...');
	$scope.register=function()
	{
		var register = {};
		register.firstName=$scope.fName;
		register.lastName=$scope.lName;
		register.email=$scope.email;
		register.phone=$scope.phone;
		register.password=$scope.password;
		register.addressLine1=$scope.Line1;
		register.addressLine2=$scope.Line2;
		register.city=$scope.City;
		register.state=$scope.State;
		register.pin=$scope.Pin;

		console.log('register:::::::::::',register);
		//console.log($scope.firstName,$scope.lastName,$scope.email,$scope.phoneNumber,$scope.line1,$scope.line2,$scope.city,$scope.state,$scope.pin);
        regFactory.getRegDetailes(register).then(function(response){
        	console.log('response:::::::::::',response);
        });
       // $scope.Register.push($scope.register);

	}
	
}]); 