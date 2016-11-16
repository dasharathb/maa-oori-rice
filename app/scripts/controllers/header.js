'use strict';
angular.module('morApp')
.controller('LCntl',['$scope','$location',function($scope,$location){
	$scope.login=function(){
		console.log('this is login.............');
		$location.path('/login');
	

	}

}]);