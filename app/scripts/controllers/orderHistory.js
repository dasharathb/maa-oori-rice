'use strict';
angular.module('morApp')
.controller('orderHistoryCntrl',['$scope', '$rootScope','$location','orderHistoryFact',
	function($scope, $rootScope, $location,orderHistoryFact){
	console.log('orderHistory controller..............');
    
    var orders=[];
    var orderList=[];
	$scope.viewOrderDetails=function(order){
		console.log('this view controller.............',order);
		$scope.orders=order;

		$('#confirmModal').modal({show : true,backdrop : false});
	}

	 $scope.close=function(){
      	$('#confirmModal').modal('hide');
      }

      $scope.submit=function(){
      	$('#confirmModal').modal('hide');
      }

	$scope.getOrderHistory = function(){
		orderHistoryFact.getOrderHistoryDtl($rootScope.emailId).then(function(data){
			console.log('controller ::::: ',data);
			 $scope.orderHistory = data;
			 console.log('retring data .........',$scope.orderHistory.date);
		});
	}
   $scope.init = function(){
		$scope.getOrderHistory();
	}

	$scope.init();
	
	
}]); 