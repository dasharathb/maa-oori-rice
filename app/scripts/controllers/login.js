'use strict';
angular.module('morApp')
.controller('loginCntr',[ '$rootScope', '$scope','$location', '$timeout', 'loginFactory','regFactory',
	function($rootScope, $scope, $location, $timeout, loginFactory, regFactory){
	console.log('hello this is home page controller...');
	
	$scope.login = function(){
		$rootScope.isLoggedIn = false;
		var loginDtl = {};
		//console.log("phone # "+$scope.userId);
		

		if(isNaN($scope.userId)){
			//console.log("phone # "+$scope.userId);
			if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.userId)){
				loginDtl.email = $scope.userId;
				$scope.error = "";
			}else {
				$scope.error = "please enter valid email";
				return;
			}
			
		}else{
			console.log('/^\d+$/.test($scope.userId).length() ',$scope.userId.length);
			if(/^\d+$/.test($scope.userId) && $scope.userId.length==10){
				loginDtl.phone = $scope.userId;
				$scope.error = "";
			}else {
				$scope.error = "please enter valid phone";
				return;
			}	
			
		}
		//loginDtl.email = $scope.email;
		loginDtl.password = $scope.password;
		console.log('loginDtl :::::::::::::::: ',loginDtl);
		loginFactory.loginUser(loginDtl).then(function(result){
			console.log('---------->',result);
			if(result != ""){
				$rootScope.isLoggedIn = true;
				$rootScope.loginUserName = result.firstName +" "+ result.lastName;
				$rootScope.emailId= result.email;
				$location.path('/product');
			}else{
				$scope.error = "user name or password is invalid.";
			}			
			
					
			
			
		});
	}	
	$scope.register=function(){
		$location.path('/registration');

	}
	
}]); 