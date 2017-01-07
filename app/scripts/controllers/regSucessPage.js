'use strict';

angular.module('morApp')
.controller('regSucessCntr',['$scope', '$rootScope', '$location','$routeParams',
	function($scope, $rootScope, $location,$routeParams){
	console.log('This isRegistration page controller...');
	$scope.msg1=$routeParams.msg;
	console.log('This isRegistration page controller...',$scope.msg1);
	$scope.loginPage=function(){
		console.log('this is sucess page');
		$location.path('/login')
	}
}]); 	