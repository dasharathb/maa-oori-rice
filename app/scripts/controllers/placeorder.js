'use strict';
angular.module('morApp')
.controller('placeOrderCntr', ['$scope','$rootScope', '$location', 'pOrderFactory','accountFact',
	function($scope, $rootScope, $location, pOrderFactory,accountFact){
	console.log('this is a place Order controller............');

//	$scope.Submit = function(){
//		$location.path('/itemdetails')
//	}
$scope.placeOrder=[];

    $scope.save = function(){

    	 	var place ={}
			     place.riceType=$scope.riceType;
    	   	 place.quantity=$scope.quantity;
          //place.date = new Date();
			console.log('place::::: ',place);	
    		$scope.placeOrder.push(place);

    		document.getElementById('textId').value = '';
    		document.getElementById('textId1').value = '';
            
			

    	}

      $scope.remove=function() {
         document.getElementById("myTable").deleteRow(1);
     }

    $scope.submit = function(){
    	var order ={};
    	order.check=$scope.check;
    	console.log($scope.check)
    	order.orderList = $scope.placeOrder;
    	 order.email = $scope.accDtl.email;
    	 order.phone=$scope.accDtl.phone;
       order.date = new Date();
       order.status = 'received';
    	console.log("this is a place Order controller..1111111111111..........", order);
    	pOrderFactory.getOrderDetailes(order).then(function(data){
			console.log('controller ::::: ',data);

      $location.path('/trackMyOrder');

            });

    	
    }	

	$scope.getOrderDetailes = function(){
		accountFact.getUserDetails($rootScope.emailId).then(function(data){
			console.log('controller ::::: ',data);
			 $scope.accDtl = data;

		});
	}
   $scope.init = function(){
		$scope.getOrderDetailes();
	}

	$scope.init();
	
}]);
