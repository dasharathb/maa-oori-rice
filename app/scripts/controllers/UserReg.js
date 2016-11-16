'use strict';

angular.module('morApp')
.controller('userRegCntr',['$scope', '$rootScope', '$location',
	function($scope, $rootScope, $location){
	console.log('hello this is user Registration page controller...');
	$scope.Register=function()
	{
		$scope.register = {};
		$scope.firstName=$scope.fName;
		$scope.lastName=$scope.lName;
		$scope.email=$scope.email;
		$scope.phoneNumber=$scope.phone;
		$scope.line1=$scope.Line1;
		$scope.line2=$scope.Line2;
		$scope.city=$scope.City;
		$scope.state=$scope.State;
		$scope.pin=$scope.Pin;
		console.log($scope.firstName,$scope.lastName,$scope.email,$scope.phoneNumber,$scope.line1,$scope.line2,$scope.city,$scope.state,$scope.pin);
        $scope.Register.push($scope.register);

	}
	
}]); 