'use strict';
angular.module('morApp')
.controller('placeOrderCntr', ['$scope','$rootScope', '$location', 'pOrderFactory',
	function($scope, $rootScope, $location, pOrderFactory){
	console.log('this is a place Order controller............');

//	$scope.Submit = function(){
//		$location.path('/itemdetails')
//	}
	$scope.orders =[];
	$scope.id = 1;
	
	$scope.getOrderDetailes = function(){
		pOrderFactory.getOrderDetailes().then(function(data){
			console.log('controller ::::: ',data);
			$scope.order = data.orders;
		});
	}

	$scope.submit = function(){
		console.log("sNo : ",$scope.sNo," riceType : ",$scope.riceType," quantity : ",$scope.quantity);

			$scope.order = {
				"id": $scope.id,
				"riceType":$scope.riceType,
				"quantity":$scope.quantity,
				"amount":$scope.amount
			};
			$scope.id = $scope.id +1;
			console.log('order ::: ',$scope.order);
			$scope.orders.push($scope.order);
		
		console.log('orders ::: ',$scope.orders);
		$location.path('/itemdetails/'+JSON.stringify($scope.orders));

	};
	$scope.init = function(){
		$scope.getOrderDetailes();
	};	

	$scope.init();
	
}]);
