'use strict';
angular.module('morApp')
.controller('proDtlCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
	
	console.log('this product details controller');

	$scope.moreDtls = function(){
		$location.path('/more/')
	}
		
}]);