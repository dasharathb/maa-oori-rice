'use strict';
angular.module('morApp')
.controller('menuCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
	
	console.log('this menu directive controller');

	$scope.productDtls = function(){
		$location.path('/product');
		console.log('product details......');
	}
		
}]);