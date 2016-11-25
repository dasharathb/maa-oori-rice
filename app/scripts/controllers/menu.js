'use strict';
angular.module('morApp')
.controller('menuCntr', ['$rootScope', '$scope', '$location',
	function ($rootScope, $scope, $location) {
	
	console.log('this menu directive controller');

	$scope.productDtls = function(){
		$location.path('/product');
		console.log('product details......');
	}
	$scope.placeOrder=function(){
		console.log('this tutor menuCntr  directive controller');
		$location.path('/placeorder');
    }
    $scope.userAcc=function(){
		console.log('this user account');
		$location.path('/account');
    }
	$scope.order=function(){
		console.log('this user account');
		$location.path('/orderHistory');
    }
    $scope.track=function(){
		console.log('this user account');
		$location.path('/trackMyOrder');
    }
		
}]);