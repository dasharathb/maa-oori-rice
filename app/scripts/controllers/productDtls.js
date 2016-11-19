'use strict';
angular.module('morApp')
.controller('proDtlCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
	
	console.log('this product details controller');

	$scope.brDtls = function(){
		$location.path('/more')
	}
	$scope.spDtls = function(){
		$location.path('/more2')
	}
		$scope.fpDtls = function(){
		$location.path('/more3')
	}
	$scope.Order = function(){
		$location.path('/placeorder')
	}
}]);