'use strict';
angular.module('morApp')
.controller('moreDtlsCntr',['$scope', '$rootScope','$location',
	function($scope, $rootScope, $location){
	console.log('hello this is more product details page controller...');
	$scope.moreDtls = function(){
	$location.path('/more');
	console.log('more product details');
}
       
	 $scope.Order = function(){
		$location.path('/placeorder')
	}
	$scope.Back = function(){
		$location.path('/product')
	}

        
	
}]); 