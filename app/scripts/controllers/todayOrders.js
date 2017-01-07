'use strict';
angular.module('morApp')
.controller('todayCntrl',['$scope', '$rootScope','$location','adminFact',
	function($scope, $rootScope, $location,adminFact){
	console.log('orderHistory controller..............');
    
    var orderForAdmin=[];
    var orders={};
	$scope.viewOrderDetails=function(order){
		console.log('this view controller.............',order);
		$scope.orders=order;

		$('#confirmModal').modal({show : true,backdrop : false});
	}

	 $scope.close=function(){
      	$('#confirmModal').modal('hide');
      }

      $scope.save=function(ordersId){

      	document.getElementById('textId').value = '';
        adminFact.saveStatus(ordersId,$scope.track).then(function(data){
		console.log('savedStatus ::::: ',data);
		

		});

      	
      }

	$scope.getOrderForAdmin = function(){
		console.log('status.......',status);
		adminFact.getOrderForAdmin().then(function(data){
			console.log('controller ::::: ',data);
			 $scope.orderForAdmin = data;
			 console.log('orderForAdmin ::::: ',$scope.orderForAdmin);


		});
	};
	
   $scope.init = function(){
		$scope.getOrderForAdmin();
	}

	$scope.init();
	
	
}]); 