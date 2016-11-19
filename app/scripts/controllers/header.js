'use strict';
angular.module('morApp')
.controller('headerCntl',['$rootScope', '$scope', '$location',function($rootScope, $scope, $location){
	$rootScope.isLoggedIn = false;
	$rootScope.loginUserName = "tttt";
	$scope.login=function(){
		console.log('this is login.............');
		$location.path('/login');

	}
	console.log(':::::::::::::',$rootScope.loginUserName);

}]);