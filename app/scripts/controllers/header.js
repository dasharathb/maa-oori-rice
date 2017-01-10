'use strict';
angular.module('morApp')
.controller('headerCntl',['$rootScope', '$scope', '$location',function($rootScope, $scope, $location){
	$rootScope.isLoggedIn = false;
	$rootScope.isAdmin = false;
	$rootScope.loginEmail;
	$scope.login=function(){
		console.log('this is login.............');
		$location.path('/login');

	}
	$scope.logout=function(){
		$rootScope.isLoggedIn = false;
		$rootScope.isAdmin = false;
		$rootScope.loginEmail = null;
		$rootScope.loginUserName="";
		$rootScope.emailId="";
		
	}
	console.log(':::::::::::::',$rootScope.loginEmail);

	$scope.setting=function(){
		$location.path('/adminOrderDetails');

	}

}]);