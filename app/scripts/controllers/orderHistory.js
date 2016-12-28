'use strict';
angular.module('morApp')
.controller('orderHistoryCntrl',['$scope', '$rootScope','$location','orderHistoryFact',
	function($scope, $rootScope, $location,orderHistoryFact){
	console.log('orderHistory controller..............');

	$scope.getOrderHistory = function(){
		orderHistoryFact.getOrderHistoryDtl($rootScope.emailId).then(function(data){
			console.log('controller ::::: ',data);
			 $scope.orderHistory = data;
			 

		});
	}
   $scope.init = function(){
		$scope.getOrderHistory();
	}

	$scope.init();
	
	
}]); 