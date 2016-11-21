'use strict';
angular.module('morApp')
.controller('loginCntr',[ '$rootScope', '$scope','$location', '$timeout', 'loginFactory',
	function($rootScope, $scope, $location, $timeout, loginFactory){
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
		$location.path('/Registration');
	}
	
}]); 